import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { SQLiteService } from './sqlite.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  constructor(private sqlite: SQLiteService) {}

  private async ensureDB(): Promise<void> {
    try {
      await this.sqlite.ejecutarSQL(`
        CREATE TABLE IF NOT EXISTS citas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          texto TEXT NOT NULL,
          autor TEXT NOT NULL
        );
      `);
    } catch (error) {
      console.error('Error al inicializar DB:', error);
      throw error;
    }
  }

  async getCitas(): Promise<Cita[]> {
    try {
      await this.ensureDB();
      const result = await this.sqlite.ejecutarSQL('SELECT * FROM citas');
      return result?.values?.map((c: any) => new Cita(c.texto, c.autor, c.id)) || [];
    } catch (error) {
      console.error('Error al obtener citas:', error);
      throw error;
    }
  }

  async agregarCita(cita: Cita): Promise<number> {
    try {
      await this.ensureDB();
      const result = await this.sqlite.ejecutarSQL(
        'INSERT INTO citas (texto, autor) VALUES (?, ?) RETURNING id',
        [cita.texto, cita.autor]
      );
      return result?.values?.[0]?.id;
    } catch (error) {
      console.error('Error al agregar cita:', error);
      throw error;
    }
  }

  async eliminarCita(id: number): Promise<void> {
    try {
      await this.sqlite.ejecutarSQL(
        'DELETE FROM citas WHERE id = ?',
        [id]
      );
    } catch (error) {
      console.error('Error al eliminar cita:', error);
      throw error;
    }
  }

  async getRandomCita(): Promise<Cita | null> {
    try {
      const citas = await this.getCitas();
      return citas.length > 0 
        ? citas[Math.floor(Math.random() * citas.length)] 
        : null;
    } catch (error) {
      console.error('Error al obtener cita aleatoria:', error);
      return null;
    }
  }

  async actualizarCita(id: number, nuevaCita: Partial<Cita>): Promise<void> {
    try {
      await this.sqlite.ejecutarSQL(
        'UPDATE citas SET texto = ?, autor = ? WHERE id = ?',
        [nuevaCita.texto, nuevaCita.autor, id]
      );
    } catch (error) {
      console.error('Error al actualizar cita:', error);
      throw error;
    }
  }
}

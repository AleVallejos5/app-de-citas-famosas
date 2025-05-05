import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { SQLiteService } from './sqlite.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private dbReady: Promise<void>;

  constructor(private sqlite: SQLiteService) {
    this.dbReady = this.inicializarDB();
  }

  private async inicializarDB(): Promise<void> {
    await this.sqlite.crearDB();
    await this.sqlite.ejecutarSQL(`
      CREATE TABLE IF NOT EXISTS citas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      texto TEXT NOT NULL,
      autor TEXT NOT NULL
      );
    `);
  }

  async getCitas(): Promise<Cita[]> {
    await this.dbReady;
    const result = await this.sqlite.ejecutarSQL('SELECT * FROM citas');
    return result?.values?.map((c: any) => new Cita(c.texto, c.autor, c.id)) || [];
  }

  async agregarCita(cita: Cita): Promise<void> {
    await this.sqlite.ejecutarSQL(
      'INSERT INTO citas (texto, autor) VALUES (?, ?)',
      [cita.texto, cita.autor]
    );
  }

  async eliminarCita(id: number): Promise<void> {
    await this.sqlite.ejecutarSQL('DELETE FROM citas WHERE id = ?', [id]);
  }

  async getRandomCita(): Promise<Cita | null> {
    const citas = await this.getCitas();
    return citas.length > 0 ? citas[Math.floor(Math.random() * citas.length)] : null;
  }

}

import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private sqlite = new SQLiteConnection(CapacitorSQLite);
  private db: any;

  async crearDB(): Promise<void> {
    try {
      this.db = await this.sqlite.createConnection(
        'citas_db',
        false,
        'no-encryption',
        1,
        false
      );
      await this.db.open();
      console.log('Conexión a SQLite establecida');
    } catch (error) {
      console.error('Error al conectar con SQLite:', error);
      throw error;
    }
  }

  async ejecutarSQL(query: string, params: any[] = []): Promise<any> {
    if (!this.db) {
      await this.crearDB(); // Auto-inicialización si no existe
    }
    return this.db.query(query, params);
  }

  async cerrarConexion(): Promise<void> {
    if (this.db) {
      await this.sqlite.closeConnection('citas_db', false);
    }
  }

  constructor() { }
}

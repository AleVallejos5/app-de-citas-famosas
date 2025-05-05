import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private db: SQLiteDBConnection | null = null;

  async crearDB(): Promise<void> {
    this.db = await CapacitorSQLite.createConnection({
      database: 'citas_db',
      encrypted: false,
      mode: 'no-encryption',
    });
    await this.db.open();
  }

  async ejecutarSQL(query{}: string, params: any[] = []): Promise<any> {
    if (!this.db) throw new Error('DB no inicializada');
    return this.db.query(query, params);
  }

  constructor() { }
}

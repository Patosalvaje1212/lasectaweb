import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

export class DatabaseRepository {
  private static instance: Database | null = null;

  public static async getInstance(): Promise<Database> {
    if (!this.instance) {
      this.instance = await open({
        filename: path.join(__dirname, '../../../database.sqlite'),
        driver: sqlite3.Database
      });
      await this.initializeTables();
    }
    return this.instance;
  }

  private static async initializeTables() {
    if (!this.instance) return;

    await this.instance.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        realName TEXT,
        botcUsername TEXT,
        email TEXT UNIQUE,
        telegramUsername TEXT,
        passwordHash TEXT NOT NULL,
        profilePicture TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
}

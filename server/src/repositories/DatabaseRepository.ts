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
        isConfirmed INTEGER DEFAULT 0,
        confirmationToken TEXT,
        confirmationTokenExpires DATETIME,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS user_roles (
        userId TEXT NOT NULL,
        role TEXT NOT NULL,
        PRIMARY KEY (userId, role),
        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS role_requests (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL,
        requestedRole TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE(userId, requestedRole, status)
      );
    `);
  }
}

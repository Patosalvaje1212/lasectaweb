import { User } from '../models/User';
import { DatabaseRepository } from './DatabaseRepository';

export class UserRepository {
  async findByUsername(username: string): Promise<User | undefined> {
    const db = await DatabaseRepository.getInstance();
    const row = await db.get<User>('SELECT * FROM users WHERE username = ?', [username]);
    if (!row) return undefined;
    return {
      ...row,
      createdAt: new Date(row.createdAt)
    };
  }

  async findById(id: string): Promise<User | undefined> {
    const db = await DatabaseRepository.getInstance();
    const row = await db.get<User>('SELECT * FROM users WHERE id = ?', [id]);
    if (!row) return undefined;
    return {
      ...row,
      createdAt: new Date(row.createdAt)
    };
  }

  async save(user: User): Promise<User> {
    const db = await DatabaseRepository.getInstance();
    await db.run(
      `INSERT INTO users (id, username, realName, botcUsername, email, telegramUsername, passwordHash, profilePicture, createdAt)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.id,
        user.username,
        user.realName,
        user.botcUsername,
        user.email,
        user.telegramUsername,
        user.passwordHash,
        user.profilePicture,
        user.createdAt.toISOString()
      ]
    );
    return user;
  }

  async update(user: User): Promise<User> {
    const db = await DatabaseRepository.getInstance();
    await db.run(
      `UPDATE users SET
         username = ?,
         realName = ?,
         botcUsername = ?,
         email = ?,
         telegramUsername = ?,
         profilePicture = ?
       WHERE id = ?`,
      [
        user.username,
        user.realName,
        user.botcUsername,
        user.email,
        user.telegramUsername,
        user.profilePicture,
        user.id
      ]
    );
    return user;
  }
}

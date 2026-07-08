import { RoleRequest } from '../models/RoleRequest';
import { DatabaseRepository } from './DatabaseRepository';

export class RoleRequestRepository {
  async save(req: RoleRequest): Promise<RoleRequest> {
    const db = await DatabaseRepository.getInstance();
    await db.run(
      `INSERT INTO role_requests (id, userId, requestedRole, status, createdAt)
       VALUES (?, ?, ?, ?, ?)`,
      [
        req.id,
        req.userId,
        req.requestedRole,
        req.status,
        req.createdAt.toISOString()
      ]
    );
    return req;
  }

  async findById(id: string): Promise<RoleRequest | undefined> {
    const db = await DatabaseRepository.getInstance();
    const row = await db.get<any>('SELECT * FROM role_requests WHERE id = ?', [id]);
    if (!row) return undefined;
    return {
      ...row,
      createdAt: new Date(row.createdAt)
    };
  }

  async listPending(): Promise<RoleRequest[]> {
    const db = await DatabaseRepository.getInstance();
    const rows = await db.all<any[]>(
      `SELECT r.*, u.username, u.realName
       FROM role_requests r
       JOIN users u ON r.userId = u.id
       WHERE r.status = 'pending'
       ORDER BY r.createdAt ASC`
    );
    return rows.map((row) => ({
      id: row.id,
      userId: row.userId,
      username: row.username,
      realName: row.realName,
      requestedRole: row.requestedRole as 'editor' | 'narrador',
      status: row.status as 'pending' | 'approved' | 'rejected',
      createdAt: new Date(row.createdAt)
    }));
  }

  async listAllForUser(userId: string): Promise<RoleRequest[]> {
    const db = await DatabaseRepository.getInstance();
    const rows = await db.all<any[]>(
      `SELECT * FROM role_requests WHERE userId = ? ORDER BY createdAt DESC`,
      [userId]
    );
    return rows.map((row) => ({
      id: row.id,
      userId: row.userId,
      requestedRole: row.requestedRole as 'editor' | 'narrador',
      status: row.status as 'pending' | 'approved' | 'rejected',
      createdAt: new Date(row.createdAt)
    }));
  }

  async update(req: RoleRequest): Promise<RoleRequest> {
    const db = await DatabaseRepository.getInstance();
    await db.run(
      `UPDATE role_requests SET status = ? WHERE id = ?`,
      [req.status, req.id]
    );
    return req;
  }
}

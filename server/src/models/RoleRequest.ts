export interface RoleRequest {
  id: string;
  userId: string;
  username?: string; // Joined in queries for convenience
  realName?: string; // Joined in queries for convenience
  requestedRole: 'editor' | 'narrador';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

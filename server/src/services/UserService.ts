import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async registerUser(userData: Omit<User, 'id' | 'passwordHash' | 'createdAt'>, passwordPlain: string): Promise<{ user: Partial<User>, token: string }> {
    const existing = await this.userRepository.findByUsername(userData.username);
    if (existing) {
      throw new Error('User already exists');
    }
    
    const passwordHash = await bcrypt.hash(passwordPlain, 10);
    
    const user: User = {
      ...userData,
      id: Date.now().toString(),
      passwordHash,
      createdAt: new Date(),
    };
    
    const savedUser = await this.userRepository.save(user);
    const JWT_SECRET = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({ id: savedUser.id, username: savedUser.username }, JWT_SECRET, { expiresIn: '7d' });
    
    const { passwordHash: _, ...userWithoutPassword } = savedUser;
    
    return { 
      user: userWithoutPassword, 
      token 
    };
  }

  async loginUser(username: string, passwordPlain: string): Promise<{ user: Partial<User>, token: string }> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(passwordPlain, user.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const JWT_SECRET = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    const { passwordHash: _, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      token
    };
  }

  async getProfile(userId: string): Promise<Partial<User>> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error('User not found');
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async updateProfile(userId: string, updateData: Partial<User>): Promise<Partial<User>> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error('User not found');

    const updatedUser = {
      ...user,
      ...updateData,
      id: user.id // Ensure ID cannot be changed
    };

    const savedUser = await this.userRepository.update(updatedUser);
    const { passwordHash: _, ...userWithoutPassword } = savedUser;
    return userWithoutPassword;
  }
}

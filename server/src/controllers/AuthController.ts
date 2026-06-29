import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { AuthRequest } from '../middlewares/auth';

export class AuthController {
  constructor(private userService: UserService) {}

  register = async (req: Request, res: Response) => {
    try {
      const { password, ...userData } = req.body;
      const result = await this.userService.registerUser(userData, password);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const result = await this.userService.loginUser(username, password);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  };

  getProfile = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }
      const profile = await this.userService.getProfile(req.user.id);
      res.status(200).json(profile);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  };

  updateProfile = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }
      const profileData = req.body;
      const updatedProfile = await this.userService.updateProfile(req.user.id, profileData);
      res.status(200).json(updatedProfile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}

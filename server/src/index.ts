import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import express from 'express';
import cors from 'cors';
import { UserRepository } from './repositories/UserRepository';
import { UserService } from './services/UserService';
import { AuthController } from './controllers/AuthController';
import { ThreadRepository } from './repositories/ThreadRepository';
import { ThreadService } from './services/ThreadService';
import { ThreadController } from './controllers/ThreadController';
import { authenticateJWT } from './middlewares/auth';
import { DatabaseRepository } from './repositories/DatabaseRepository';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Initialize dependencies
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const authController = new AuthController(userService);

const threadRepository = new ThreadRepository();
const threadService = new ThreadService(threadRepository);
const threadController = new ThreadController(threadService);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', api: 'La Secta' });
});

app.post('/api/auth/register', authController.register);
app.post('/api/auth/login', authController.login);
app.get('/api/auth/profile', authenticateJWT as express.RequestHandler, authController.getProfile as express.RequestHandler);
app.put('/api/auth/profile', authenticateJWT as express.RequestHandler, authController.updateProfile as express.RequestHandler);

app.post('/api/threads', threadController.create);
app.get('/api/threads', threadController.getAll);
app.post('/api/threads/:threadId/comments', threadController.addComment);

// Initialize database then start server
DatabaseRepository.getInstance()
  .then(() => {
    console.log('Database initialized successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database', err);
  });

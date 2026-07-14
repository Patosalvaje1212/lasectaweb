import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Intentar cargar el archivo .env desde múltiples rutas para garantizar compatibilidad (dev, prod, PM2, dist, etc.)
const envPaths = [
  path.resolve(process.cwd(), '.env'),
  path.resolve(process.cwd(), '../.env'),
  path.resolve(__dirname, '../.env'),
  path.resolve(__dirname, '../../.env'),
];

let loaded = false;
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`[ENV] Cargado archivo de entorno desde: ${envPath}`);
    loaded = true;
    break;
  }
}

if (!loaded) {
  dotenv.config();
  console.log('[ENV] Cargando entorno con configuración por defecto.');
}

import express from 'express';
import cors from 'cors';
import { UserRepository } from './repositories/UserRepository';
import { RoleRequestRepository } from './repositories/RoleRequestRepository';
import { UserService } from './services/UserService';
import { AuthController } from './controllers/AuthController';
import { ThreadRepository } from './repositories/ThreadRepository';
import { ThreadService } from './services/ThreadService';
import { ThreadController } from './controllers/ThreadController';
import { authenticateJWT } from './middlewares/auth';
import { DatabaseRepository } from './repositories/DatabaseRepository';
import { seedAdminUser } from './utils/seeder';
import { VillacuervosRepository } from './repositories/VillacuervosRepository';
import { VillacuervosService } from './services/VillacuervosService';
import { VillacuervosController } from './controllers/VillacuervosController';

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
const roleRequestRepository = new RoleRequestRepository();
const userService = new UserService(userRepository, roleRequestRepository);
const authController = new AuthController(userService);

const threadRepository = new ThreadRepository();
const threadService = new ThreadService(threadRepository);
const threadController = new ThreadController(threadService);

const villacuervosRepository = new VillacuervosRepository();
const villacuervosService = new VillacuervosService(villacuervosRepository, userRepository);
const villacuervosController = new VillacuervosController(villacuervosService);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', api: 'La Secta' });
});

app.post('/api/auth/register', authController.register);
app.post('/api/auth/login', authController.login);
app.get('/api/auth/confirm', authController.confirm);
app.get('/api/auth/profile', authenticateJWT as express.RequestHandler, authController.getProfile as express.RequestHandler);
app.put('/api/auth/profile', authenticateJWT as express.RequestHandler, authController.updateProfile as express.RequestHandler);

// Endpoints de Roles y Panel de Gestión
app.post('/api/auth/role-request', authenticateJWT as express.RequestHandler, authController.createRoleRequest as express.RequestHandler);
app.get('/api/auth/role-requests/pending', authenticateJWT as express.RequestHandler, authController.listPendingRoleRequests as express.RequestHandler);
app.get('/api/auth/role-requests/my', authenticateJWT as express.RequestHandler, authController.listMyRoleRequests as express.RequestHandler);
app.put('/api/auth/role-requests/:requestId/resolve', authenticateJWT as express.RequestHandler, authController.resolveRoleRequest as express.RequestHandler);
app.get('/api/auth/users', authenticateJWT as express.RequestHandler, authController.listUsers as express.RequestHandler);
app.put('/api/auth/users/:userId/roles', authenticateJWT as express.RequestHandler, authController.updateUserRoles as express.RequestHandler);

app.post('/api/threads', threadController.create);
app.get('/api/threads', threadController.getAll);
app.post('/api/threads/:threadId/comments', threadController.addComment);

// Rutas de Villacuervos (Lectura pública)
app.get('/api/villacuervos/roles', villacuervosController.getRoles);
app.get('/api/villacuervos/roles/:key', villacuervosController.getRoleByKey);
app.get('/api/villacuervos/jinxes', villacuervosController.getJinxes);
app.get('/api/villacuervos/translations', villacuervosController.getTranslations);
app.get('/api/villacuervos/translations/:slug', villacuervosController.getTranslationPack);

// Rutas de Villacuervos (Escritura/Partidas - Protegidas para Narradores)
app.get('/api/villacuervos/plays/pending', authenticateJWT as express.RequestHandler, villacuervosController.getPendingPlays as express.RequestHandler);
app.post('/api/villacuervos/plays', authenticateJWT as express.RequestHandler, villacuervosController.createPlay as express.RequestHandler);
app.patch('/api/villacuervos/plays/:playSlug', authenticateJWT as express.RequestHandler, villacuervosController.updatePlay as express.RequestHandler);

// Initialize database then start server
DatabaseRepository.getInstance()
  .then(async () => {
    console.log('Database initialized successfully');
    
    // Seed admin user if configured
    await seedAdminUser(userRepository);
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database', err);
  });

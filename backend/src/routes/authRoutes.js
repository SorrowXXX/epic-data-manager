import express from 'express';
import { register, login } from '../controllers/userController.js';
import { getProfile, deleteAccount } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', authenticateToken, getProfile);
router.delete('/me', authenticateToken, deleteAccount);

export default router;
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { findUserByUsername, insertUser } from '../repositories/userRepository.js';
import { responses } from '../utils/responses.js';

const SECRET = process.env.JWT_SECRET || 'secret-key';

export async function register(req, res) {
    const { username, email, password } = req.body;

        if (!username || !email || !password) {
            const { status, body } = responses.missingCredentials;
            return res.status(status).json(body);
        }

        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            const { status, body } = responses.usernameTaken;
            return res.status(status).json(body);
        }

        const hash = await bcrypt.hash(password, 10);
        await insertUser(uuidv4(), username, email, hash);

        const { status, body } = responses.userRegistered;
        return res.status(status).json(body);
    }

export async function login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        const { status, body } = responses.missingCredentials;
        return res.status(status).json(body);
    }

    const user = await findUserByUsername(username);
    if (!user) {
        const { status, body } = responses.invalidCredentials;
        return res.status(status).json(body);
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
        const { status, body } = responses.invalidCredentials;
        return res.status(status).json(body);
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1d' });
    return res.json({ token });
}

export async function getProfile(req, res) {
        const user = await findUserByUsername(req.user.username);
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json({ id: user.id, username: user.username, created_at: user.created_at });
    }

// controllers/userController.js
import { deleteUserById } from '../repositories/userRepository.js';

export async function deleteAccount(req, res) {
    try {
        await deleteUserById(req.user.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Erreur dans deleteAccount:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
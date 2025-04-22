import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from '../src/routes/authRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173', // autorise ton frontend Vite
    credentials: true                // utile si tu veux gérer les cookies plus tard
}));

app.use(express.json());
app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`✅ REST API ready on http://localhost:${PORT}`);
});
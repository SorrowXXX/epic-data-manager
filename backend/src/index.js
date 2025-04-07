import express from 'express';
import cors from 'cors';
import { getSchemas } from './db.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/schemas', async (req, res) => {
    try {
        const schemas = await getSchemas();
        res.json({ schemas });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
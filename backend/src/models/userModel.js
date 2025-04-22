import { getConnection } from '../db.js';

export async function createUserTableIfNotExists() {
    const db = await getConnection();
    await db.query(`
        CREATE TABLE IF NOT EXISTS user (
            id CHAR(36) PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
    `);
    db.release();
}
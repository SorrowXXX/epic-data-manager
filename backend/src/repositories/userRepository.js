import { getConnection } from '../db.js';

export async function findUserByUsername(username) {
    const db = await getConnection();
    const rows = await db.query('SELECT * FROM user WHERE username = ?', [username]);
    db.release();
    return rows[0];
}

export async function insertUser(id, username, email, passwordHash) {
    const db = await getConnection();
    await db.query(
        'INSERT INTO user (id, username, email, password_hash) VALUES (?, ?, ?, ?)',
        [id, username, email, passwordHash]
    );
    db.release();
}

export async function deleteUserById(id) {
    const db = await getConnection();
    await db.query('DELETE FROM user WHERE id = ?', [id]);
    db.release();
}
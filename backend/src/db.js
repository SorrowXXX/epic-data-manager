import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

export async function getConnection() {
    return await pool.getConnection();
}

export async function getSchemas() {
    const conn = await getConnection();
    try {
        const rows = await conn.query("SHOW DATABASES");
        return rows.map(row => row.Database);
    } finally {
        conn.release();
    }
}
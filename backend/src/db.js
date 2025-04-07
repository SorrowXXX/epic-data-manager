import mariadb from 'mariadb';
import dotenv from 'dotenv';
dotenv.config();

export const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 5
});

export async function getSchemas() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SHOW DATABASES");
        return rows.map(row => row.Database);
    } finally {
        if (conn) conn.release();
    }
}
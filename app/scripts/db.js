import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
    try {
        const db = await open({
            filename: './database.db',
            driver: sqlite3.Database
        });
        console.log('Connected to the database...');
        return db;
    } catch (err) {
        console.error('Failed to open database:', err);
        throw err;
    }
}

const OpenDb = await openDb();

export default OpenDb;

// can use :memory: to create an in-memory database
import OpenDb from "./db.js";
import {
    invoices,
    customers
} from '../library/data/placeholder-data.js';
import crypto from 'crypto';

async function seedInvoies(client){
    try {
        const createTable = await client.exec(`
            CREATE TABLE IF NOT EXISTS invoices (
            id TEXT PRIMARY KEY,
            customer_id TEXT NOT NULL,
            amount INT NOT NULL,
            status VARCHAR(255) NOT NULL,
            date DATE NOT NULL)
            `);
        
        console.log('Created "invoices" table');

        const insertedInvoices = await Promise.all(
            invoices.map(
                async (invoice) => {
                    const id = crypto.randomUUID(); 
                    return client.all('INSERT INTO INVOICES (id, customer_id, amount, status, date) VALUES (?, ?, ?, ?, ?) ON CONFLICT (id) DO NOTHING',
                    [id, invoice.customer_id, invoice.amount, invoice.status, invoice.date]
                    )
                })  
        )

        console.log('Inserted invoices:', insertedInvoices.length);

        return {
            createTable,
            invoices: insertedInvoices,
        };
    } catch (err) {
        console.error('Failed to seed invoices:', err);
        throw err;
    }
}

async function seedCustomers(client){
    try {
        const createTable = await client.exec(`
            CREATE TABLE IF NOT EXISTS customers (
            id TEXT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            image_url VARCHAR(255) NOT NULL)
            `);
        console.log('Created "customers" table');

        const insertedCustomers = await Promise.all(
            customers.map(
                (customer) => client.all('INSERT INTO customers (id, name, email, image_url) VALUES (?, ?, ?, ?) ON CONFLICT (id) DO NOTHING',
                [customer.id, customer.name, customer.email, customer.image_url]
                )
            )
        )

        console.log('Inserted customers:', insertedCustomers.length);

        return {
            createTable,
            customers: insertedCustomers,
        };
    } catch (err) {
        console.error('Failed to seed customers:', err);
        throw err;
    }
}

async function main() {
    const client = OpenDb;

    await seedInvoies(client);
    await seedCustomers(client);
}

main().catch((err) => {
    console.error('An error occured:', err);
});
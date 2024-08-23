import OpenDb from '../scripts/db';
import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 6;

export async function fetchInvoicesPages(query: string) {
    noStore();

    try {
        const client = OpenDb;
        const count = await client.all(`
        SELECT COUNT(*)
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE
            customers.name LIKE ? OR
            customers.email LIKE ? OR
            invoices.amount LIKE ? OR
            invoices.date LIKE ? OR
            invoices.status LIKE ?
        `, [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`]);

        const totalPages = Math.ceil(Number(count[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database error:' + error);
        throw new Error('Failed to fetch total number of invoices');
    }

}

export async function fetchFilteredInvoices(
    query: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1 ) * ITEMS_PER_PAGE;

    try {
        const client = OpenDb;
        const invoices = await client.all(`
            SELECT
                invoices.id,
                invoices.amount,
                invoices.date,
                invoices.status,
                customers.name,
                customers.email,
                customers.image_url
            FROM invoices
            JOIN customers ON invoices.customer_id = customers.id
            WHERE
                customers.name LIKE ? OR
                customers.email LIKE ? OR
                invoices.amount LIKE ? OR
                invoices.date LIKE ? OR
                invoices.status LIKE ?
            ORDER BY invoices.date DESC
            LIMIT ? OFFSET ?
            `, [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, ITEMS_PER_PAGE, offset]);
        
        return invoices;
    } catch (error) {
        console.error('Database error:' + error);
        throw new Error('Failed to fetch invoices');
    }
}
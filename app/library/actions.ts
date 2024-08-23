'use server';
import OpenDb from "../scripts/db";
import { revalidatePath } from 'next/cache';

export async function deleteInvoice(id: string) {
    //throw new Error('Failed to Delete Invoice');

    try {
        const client = OpenDb;
      await client.run(`DELETE FROM invoices WHERE id = ${id}`);
      revalidatePath('/dashboard/invoices');
      return { message: 'Deleted Invoice.'};
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
  }
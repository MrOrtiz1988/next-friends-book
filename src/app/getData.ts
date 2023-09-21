// getData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../db'; // Import your database connection

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM "user"');
    client.release(); // Release the client back to the pool

    const data = result.rows;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from PostgreSQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// getData.ts
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../db'; // Import your database connection

export async function GET() {
  
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM "user"');
    client.release(); // Release the client back to the pool

    const data = result.rows;
    return NextResponse.json({data: data});
  }

// export async function GET() {
//   const person = {
//     name: 'luis',
//     age: 35,
//     isHispanic: true
//   }
//   return NextResponse.json({data: person});
// }
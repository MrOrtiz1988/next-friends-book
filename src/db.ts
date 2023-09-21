import { Pool } from 'pg';

// Replace these values with your PostgreSQL database configuration
const dbConfig = {
  user: 'postgres',
  password: 'Gambino20',
  host: 'localhost',
  database: 'friends_book',
  port: 5432, // Change to your PostgreSQL port if needed
};

const pool = new Pool(dbConfig);

export default pool;

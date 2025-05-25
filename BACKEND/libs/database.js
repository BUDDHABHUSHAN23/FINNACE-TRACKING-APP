// Database connection setup for a Node.js application using PostgreSQL
// Import necessary packages
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const { Pool } = pg;
// Create a new pool instance with connection details   

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

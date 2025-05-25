import express from 'express';   // Import express
import cors from 'cors';  // Import cors for handling CORS issues
import dotenv from 'dotenv';    // Import dotenv for environment variable management
import { pool } from '../libs/database.js'; // Import database connection pool


// Here we have to create a router instance
const router = express.Router();

// Now expoert the router instance
export default router;
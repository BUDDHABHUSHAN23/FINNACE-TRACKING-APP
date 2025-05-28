import express from 'express';   // Import express
import cors from 'cors';  // Import cors for handling CORS issues
import dotenv from 'dotenv';    // Import dotenv for environment variable management
import { pool } from '../libs/database.js'; // Import database connection pool
import authRoutes from './authRoutes.js'; // Import authentication routes
//import userRoutes from './userRoutes.js'; // Import user-related routes
//import accountRoutes from './accountRoutes.js'; // Import payment account routes
//import transactionRoutes from './transactionRoutes.js'; // Import transaction routes

// Here we have to create a router instance
const router = express.Router();


// Now we hace to various routes 
router.use("/auth", authRoutes); // Use authentication routes
//router.use("/users", userRoutes); // Use user-related routes
//router.use("/accounts", accountRoutes); // Use payment account routes
//router.use("/transactions", transactionRoutes); // Use transaction routes



// Now expoert the router instance
export default router;
// Import necessary packages
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';


import routes from './routes/index.js'; // Import the router   this will handle API routes 

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Changed from cors("*") to default settings
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));


// Set the port from environment variable or default to 8000
const PORT = process.env.PORT || 5050;



// // Add a basic test route
// app.get('/', (req, res) => {
//   res.json({ 
//     status: 'running',
//     message: 'Server is working' 
//   });
// });

// Improved basic test route
app.get('/', (req, res) => {
  res.json({
    status: 'running',
    message: 'Server is working',
    environment: process.env.NODE_ENV || 'development',
    apiVersion: 'v1',
    serverTime: new Date().toISOString()
  });
});

app.use('/api-v1', routes); // Use the router for API routes 

// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    status: 404
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
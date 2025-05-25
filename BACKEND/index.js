// Import necessary packages
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Set the port from environment variable or default to 8000
const PORT = process.env.PORT || 6000;
// Middleware
app.use(cors()); // Changed from cors("*") to default settings
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Add a basic test route
app.get('/', (req, res) => {
  res.json({ 
    status: 'running',
    message: 'Server is working' 
  });
});

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
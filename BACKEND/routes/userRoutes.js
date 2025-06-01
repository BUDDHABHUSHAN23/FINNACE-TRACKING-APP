// Overview: userRoutes
// Purpose
// userRoutes will handle endpoints related to user management beyond authentication, such as:

// Fetching a single user’s profile
// Updating user details (profile, password, etc.)
// Deleting a user account
// (Optional) Listing all users (for admin)
// Typical Endpoints
// Method	Route	Description
// GET	/users/:id	Get a user’s profile by ID
// PUT	/users/:id	Update a user’s profile by ID
// DELETE	/users/:id	Delete a user by ID
// GET	users	(Admin) Get all users


import express from 'express'; // Import express
import authMiddleware from '../middleware/authmiddleware.js'; // Import the authentication middleware
import { changePassword, getUser, updateUser } from '../controllers/userController.js';



const router = express.Router(); // Create a new router instance 


router.get('/', authMiddleware, getUser );   // Route to get the authenticated user's profile
router.put('/id', authMiddleware, updateUser); // Route to update the userID 
router.put("/change-password", authMiddleware, changePassword); // Route to change the user's password



export default router; // Export the router instance

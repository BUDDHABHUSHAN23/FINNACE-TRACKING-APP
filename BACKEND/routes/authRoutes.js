import express from 'express';   // Import express
import { signInUser, signUpUser ,getAllUsers } from '../controllers/authController.js';   // This is shortcut we have used over here select + ctrl + space to import the functions from the authController file
 
const router = express.Router(); // Create a new router instance

router.post('/sign-up', signUpUser); // Route for user signup
router.post('/sign-in', signInUser); // Route for user login 
router.get('/all', getAllUsers); // Route to get all users (for testing purposes)
// Note: Ensure that the getAllUsers function is defined in authController.js

export default router; // Export the router instance




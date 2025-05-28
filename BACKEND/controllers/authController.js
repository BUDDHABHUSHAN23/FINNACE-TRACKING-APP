// Here we will create the authController.js file

import { pool } from '../config/db.js'; // Ensure pool is imported
import { hashPassword } from '../utils/authUtils.js'; // Ensure hashPassword function is imported

// Here we will create the signUpUser function 
export const signUpUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if all required fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                status: "error",
                message: "All fields are required"
            });
        }

        // Here by using the pool method we will check if the user already exists in the database
        const userExist = await pool.query({
            text: "SELECT EXISTS (SELECT 1 FROM tbluser WHERE email = $1)",
            values: [email]
        });

        // If the user already exists, we will return an error message
        if (userExist.rows[0].exists) {
            return res.status(400).json({
                status: "error",
                message: "User already exists"
            });
        }

        // logic for the hashed password and insert the user into the database
        const hashedPassword = await hashPassword(password);
        const user = await pool.query({
            text: "INSERT INTO tbluser (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
            values: [firstName, lastName, email, hashedPassword]
        });

        // If the user is successfully created, we will return a success message
        user.rows[0].password = undefined; // Remove the password from the user object
        res.status(201).json({
            status: "success",
            message: "User is Created Successfully",
            data: user.rows[0]
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

// Here we will create the signInUser function

export const signInUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};


// export const signInUser = async (req, res) => {
//     try {
//         // Sign in logic will go here
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             status: "error",
//             message: "Internal server error"
//         });
//     }
// };

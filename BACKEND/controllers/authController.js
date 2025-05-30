// Here we will create the authController.js file

import { pool } from '../libs/database.js'; // Ensure pool is imported
import { hashPassword , comparePassword , createJWToken  } from '../libs/hashed.js'; // Ensure hashPassword function is imported

// Here we will create the signUpUser function 
// 🚀 SIGN-UP FUNCTION
export const signUpUser = async (req, res) => {
    // console.log('REQ.BODY:', req.body);  // <-- Add this line
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if all required fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                status: "error",
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const userExist = await pool.query({
            text: "SELECT EXISTS (SELECT 1 FROM tbluser WHERE email = $1)",
            values: [email]
        });

        if (userExist.rows[0].exists) {
            return res.status(400).json({
                status: "error",
                message: "User already exists"
            });
        }

        // Hash password and insert user
        const hashedPassword = await hashPassword(password);
        const user = await pool.query({
            text: "INSERT INTO tbluser (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
            values: [firstName, lastName, email, hashedPassword]
        });

        user.rows[0].password = undefined; // Remove password from response

        res.status(201).json({
            status: "success",
            message: "User is Created Successfully",
            data: user.rows[0]
        });

    } catch (error) {
        console.error("❌ SIGN-UP ERROR:", error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

// Here we will create the signInUser function

export const signInUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;   // Log the request body to check the input and paasing the parameters
        const  result = await pool.query({
            text : "SELECT * FROM tbluser WHERE email = $1",
            values: [email]
        });

        const user = result.rows[0];  // Assuming the user is found
        // if the user exists 
        if (!user){
            return res.status(400).json({
                status: "error",
                message: "User does not exist"
            });
        };

        // Compare the password with the hashed password
        const isPasswordValid = await comparePassword(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).json({
                status: "error",
                message: "Invalid password"
            });
        };

        // if password is okay then gernerate a token
        const token =  createJWToken(user.id);
        res.status(200).json({
            status: "success",
            message: "User signed in successfully",
            data: {
                user: {
                    id: user.id,
                    firstName: user.firstname,   // <-- use .firstname    // this is the responser model where i can see th user
                    lastName: user.lastname,     // <-- use .lastname
                    email: user.email         
                },
                token: token
            }
        });
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


// Now ill create the end point for getting all the users fordatabase 

export const getAllUsers = async (req, res) => {
    try {
        const result =await pool.query ("SELECT * FROM tbluser");
        res.status(200).json({
            status : "success",
            message: "Users fetched successfully",
            data: result.rows
        });
    } catch (error) {
        Console.error("❌ GET ALL USERS ERROR:", error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};
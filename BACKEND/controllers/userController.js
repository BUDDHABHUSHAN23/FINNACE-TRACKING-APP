// Description: User controller for handling user-related operations

import { pool } from "../libs/database.js"; // Ensure pool is imported
import { comparePassword, hashPassword } from "../libs/hashed.js";



export const getUser = async (req, res) => {
    try {
        // Sign in logic will go here
        const  { userId } = req.body.user; // Extract user ID from the request body
                // Check if user already exists
                const userExist = await pool.query({
                    text: "SELECT EXISTS (SELECT 1 FROM tbluser WHERE email = $1)",
                    values: [email]
                });
                const user =userExist.rows[0].exists;
        //If user does not exist, return an error
                if (!userId) {
                    return res.status(400).json({
                        status: "error",
                        message: "User ID is required"
                    });
                } 
                
                user.password = undefined; // Remove password from response
                res.status(200).json({
                    status: "success",
                    message: "User profile fetched successfully",
                    data: user
                }); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};


// Function to update user details

export const updateUser = async (req, res) => {
    try {  
        // The user info can be upadated by the this function 
        const {userId} = req.body.user ;
        // we need mutiple feilds for the updating for the use 
        const {firstname , lastname , county , currency ,contact} = req.body;
        // First check the user exist or not or already its exist 
        const userExist = await pool.query ({
            text : "SELECT EXISTS (SELECT 1 FROM tbluser WHERE userId = $1)",    // This will check the user is exist or not 
            values : [userId]   // This is the value of the colunm that we need to check 
        });
        // if user not found 
        if(!user){
            return res.status(404).json({
                status : "error",
                message : "not found user"
            });
        }
        // If user exists, update the user details
        await pool.query({
            text: "UPDATE tbluser SET firstname = $1, lastname = $2, county = $3, currency = $4, contact = $5 , updatedar = CURRENT_TIMESTAMP WHERE userId = $6 RETUNING *",
            values: [firstname, lastname, county, currency, contact, userId] 
        });  

        updateUser.rows[0].password = undefined; // Remove password from response
        // Send response to the user that the profile is updated
            res.status(200).json({
                status: "success",
                message: "User profile updated successfully",
                data: updateUser.rows[0]
            }); 

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

// Overview: userController 

export const changePassword = async (req, res) => {
    try {
        // Sign in logic will go here
        const { userId } = req.body.user; // Extract user ID from the request body
        //We need the multiple fields to update the user profile
        const {currentPassword, newPassword, confirmePassword } = req.body; // Extract user details from the request body
        // Check if user already exists
            const userExist = await pool.query({
                text: "SELECT EXISTS (SELECT 1 FROM tbluser WHERE userId = $1)",
                values: [userId]
            });
        const user = userExist.row[0].exists;
        // If user does not exist, return an error
            if(!user) {
                return res.status(404).json({
                    status: "error",
                    message: "User not found"
                });
            } 
        // Also need to chect that new pasword is not same as current password 
            if (newPassword !== confirmePassword) {
                return res.status(400).json({
                    status: "error",
                    message: "New password cannot be same as current password"
                });
            }
        // If the pasword matches 
            const isMatch = await comparePassword(currentPassword, user?.password) ;
            if (!match) {
                return res.status(401).json({
                    status : "error",
                    message : "Invalid cureentPassword"
                });
            }
        // if the pasword matches we have to Hass that new password 
            const hashedPassword = await hashPassword(newPassword);
                await pool.query({
                    text : "UPDATE tbluser SET password = $1 WHERE id = $2",
                values :[hashedPassword, userId]
            });
            // repsonse to the user the password is got updated 
                res.status(200).json({
                    status : "success",
                    message :"Password has been changed sucessfully"
                }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};
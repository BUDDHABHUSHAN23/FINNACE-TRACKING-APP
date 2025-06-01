// This file is used for the hashed password and other things

import bycript from 'bcrypt';
import jwt from 'jsonwebtoken';


// Now here we wil create the hashPassword function

export const hashPassword = async (userValue) => {
    const salt = await bycript.genSalt(10); // Generate a salt with 10 rounds
    const hashedPassword = await bycript.hash(userValue, salt); // Hash the user value with the salt
    return hashedPassword; // Return the hashed password 
};

// Now we will create the comparePassword function
export const comparePassword = async (userPassword, password) => {
    try {
        const isMatch = await bycript.compare(userPassword, password); // Compare the user password with the hashed password
        return isMatch; // Return true if the passwords match, false otherwise 
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw new Error("Password comparison failed");
    }
};


//Now we wil create the JWT token function

export const createJWToken =  (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d' // Token will expire in 30 days
    }); // Sign the token with the user ID and secret key
};


export function getMonthName(index) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[index];
}
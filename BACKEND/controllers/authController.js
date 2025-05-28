// Here we will create the authController.js file


// Here we will created the signUpUser function 
export const signUpUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        // Check if all required fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                status: "error",
                message: "All fields are required"
            }); 
        }
        // Here by using the pool method we will check if the user already exists in the database

        const userExist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    } catch (error) {
        console.log(error);
        res.status(500).json ({
            status: "error",
            message : "Internal server error"
        });
    }
};


// Here we will create the signInUser function

export const signInUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json ({
            status: "error",
            message : "Internal server error"
        });
    }
};
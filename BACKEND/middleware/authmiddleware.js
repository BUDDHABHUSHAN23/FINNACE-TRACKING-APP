import JWT from "jsonwebtoken";

// Middleware to authenticate user requests using JWT
// This middleware checks for the presence of a JWT in the Authorization header
const authMiddleware = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ status: "auth_failed", message: "Authentication failed" });
  }


// Extract the token from the Authorization header "Bearer <token>" format 
  const token = authHeader?.split(" ")[1];


  // Verify the token using the secret key
  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET);

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ status: "auth_failed", message: "Authentication failed" });
  }
};

export default authMiddleware;
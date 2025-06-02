import JWT from "jsonwebtoken";

// Middleware to authenticate user requests using JWT
// This middleware checks for the presence of a JWT in the Authorization header
const authMiddleware = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  // Check if the Authorization header is missing or not in Bearer format
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      status: "auth_failed",
      message: "Authentication failed",
    });
  }

  // Extract the token from the Authorization header ("Bearer <token>")
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key
    const userToken = JWT.verify(token, process.env.JWT_SECRET);

    // Add user info to the request object
    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: "auth_failed",
      message: "Authentication failed",
    });
  }
};

export default authMiddleware;

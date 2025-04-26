const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization; // Get the entire header value
  let token;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Standard case: "Bearer <token>"
    token = authHeader.split(" ")[1];
  } else if (authHeader) {
    // Fallback: Assume the header value is just the token (not recommended)
    token = authHeader;
    console.warn(
      "Authorization header missing 'Bearer ' prefix. This is not standard."
    );
  }

  console.log("token", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Error! Token was not provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error in token", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;

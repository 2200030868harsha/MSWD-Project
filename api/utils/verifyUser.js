import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

// Middleware function to verify JWT token
export const verifyToken = (req, res, next) => {
  // Extract the JWT token from the request cookies
  const token = req.cookies.access_token;

  // If no token is present, return an Unauthorized error
  if (!token) return next(errorHandler(401, 'Unauthorized'));

  // Verify the JWT token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // If there's an error during verification, return a Forbidden error
    if (err) return next(errorHandler(403, 'Forbidden'));

    // If verification is successful, attach the user object to the request and proceed to the next middleware
    req.user = user;
    next();
  });
};

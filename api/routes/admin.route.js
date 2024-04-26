import express from 'express';
import { signup, signin } from '../controllers/admin.controller.js';
import { getAllUsers } from '../controllers/user.controller.js'; // Import getAllUsers function

const router = express.Router();

// Route to handle admin signup
router.post('/signup', signup);

// Route to handle admin signin
router.post('/signin', signin);

// Route to get all users
router.get('/users', getAllUsers); // Assuming '/admin/users' is the endpoint to fetch all users

export default router;

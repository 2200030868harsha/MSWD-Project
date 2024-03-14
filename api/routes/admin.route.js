import express from 'express';
import { signup, signin } from '../controllers/admin.controller.js';

const router = express.Router();

// Route to handle admin signup
router.post('/signup', signup);

// Route to handle admin signin
router.post('/signin', signin);

export default router;

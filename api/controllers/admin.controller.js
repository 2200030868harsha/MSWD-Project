import Admin from '../models/admin.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { adminNotFoundError, adminCreationFailedError } from '../utils/adminError.js';

export const signup = async (req, res, next) => {
  const { AdminId, password } = req.body;

  try {
    // Check if the AdminId already exists
    const existingAdmin = await Admin.findOne({ AdminId });
    if (existingAdmin) {
      return next(adminCreationFailedError());
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({
      AdminId,
      password: hashedPassword
    });

    // Save the admin to the database
    await newAdmin.save();

    return res.status(201).json({ success: true, message: 'Admin account created successfully' });
  } catch (error) {
    return next(adminCreationFailedError());
  }
};


export const signin = async (req, res, next) => {
    const { AdminId, password } = req.body;
  
    try {
      // Find the admin by AdminId
      const admin = await Admin.findOne({ AdminId });
      if (!admin) {
        return next(adminNotFoundError());
      }
  
      // Compare passwords
      const isPasswordMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordMatch) {
        return next(adminNotFoundError());
      }
  
      // Generate JWT token
      const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET);
  
      // Send token in response
      res.status(200).json({ success: true, token });
    } catch (error) {
      return next(adminNotFoundError());
    }
  };

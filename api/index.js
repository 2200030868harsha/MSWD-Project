import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import adminRouter from './routes/admin.route.js'; // Add this line
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import path from 'path';
dotenv.config();

process.env.JWT_SECRET = 'Harshabhee@2004';
mongoose.connect("mongodb+srv://harsha:Harshabhee2004@cluster0.vxvlmln.mongodb.net/Realestate?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to Mongodb");
}).catch((err)=>{
    console.log(err);
})
const __dirname = path.resolve();
const app=express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000,() =>{
      console.log('Server is running on port 3000');
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/admin', adminRouter); // Add this line
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  })

app.use((err, req, res, next) => {
    console.error(err); // Log the error to the console
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


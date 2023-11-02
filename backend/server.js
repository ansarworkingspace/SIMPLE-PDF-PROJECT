
//SERVER
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import userRoutes from './router/userRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';


//PORT 
const port = process.env.PORT || 5000;

//CONNECTING DATATBASE
connectDB();


const app = express();


//CORS SETUP
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Specify the route for user API
app.use('/api/users', userRoutes);

// Define the default route
app.get('/', (req, res) => {
    res.send('API is running....');
  });


// Define error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server on the specified port
app.listen(port, () => console.log(`Server started on port ${port}`));
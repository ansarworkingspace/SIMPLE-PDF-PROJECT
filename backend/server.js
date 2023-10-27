import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import userRoutes from './router/userRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';



const port = process.env.PORT || 5000;

connectDB();

const app = express();


const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running....');
  });



  app.use(notFound);
  app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
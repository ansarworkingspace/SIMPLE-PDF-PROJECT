import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './router/userRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/database.js';

dotenv.config();

const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`Server started on port ${port}`));
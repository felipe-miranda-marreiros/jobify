import express from 'express';

import 'express-async-errors';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

import dotenv from 'dotenv';
import connectDB from './db/connect.js';

const app = express();
app.use(express.json());

dotenv.config();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();

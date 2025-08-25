import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api/auth', authRouter);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/seva';
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  })
  .catch((err) => {
    console.error('Mongo connection error', err);
    process.exit(1);
  });

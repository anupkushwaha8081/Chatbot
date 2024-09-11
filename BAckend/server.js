import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Make sure to change .js
import cors from 'cors';

import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

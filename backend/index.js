// server.js

import dotenv from 'dotenv';
import mongoose from './src/db/index.js'; // assuming you're using mongoose
import app from './app.js';

dotenv.config({
  path: './.env'
});

// Correct way to define route (in Express)
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server **after MongoDB connects**
mongoose.connection.once('open', () => {
  console.log('✅ MongoDB connected');

  app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Server is running on port: ${process.env.PORT}`);
  });
});

// Optional: Catch connection errors
mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

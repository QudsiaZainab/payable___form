// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// MongoDB connection
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Enable TLS encryption
  tlsAllowInvalidHostnames: true // Allow invalid hostnames (e.g., self-signed certificates)
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes
const userRoute = require('./routes/useRoute');
const formRoute = require('./routes/form');

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Use routes
app.use('/users', userRoute);
app.use('/api', formRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

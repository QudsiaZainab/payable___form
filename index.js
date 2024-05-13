// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.once("open", () => {
    console.log("MongoDB connected successfully");
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

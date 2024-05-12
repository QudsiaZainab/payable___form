const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/payable_form', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", (err)=>{
    console.log(err);
})

db.once("open",()=>{
    console.log("db connected");
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())



// Import routes
const userRoute = require('./routes/useRoute');

// Import controllers
const formRoute = require('./routes/form');

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Use routes
app.use('/users', userRoute);
app.use('/api',formRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const user_route = express();

user_route.set('view engine', 'ejs');
user_route.set('views', './views');
user_route.use(express.static('public'));

const userController = require('../controllers/userController');
user_route.get('/report', userController.loadReport);
user_route.get('/', userController.loadForm);
user_route.get('/report_generate', userController.generateReport)
module.exports = user_route;
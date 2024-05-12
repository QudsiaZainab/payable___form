const express = require('express');
const router = express.Router();

const FormController = require('../controllers/userController');

router.get('/get', FormController.index);
router.get('/getforms', FormController.show);
router.post('/store', FormController.store);

module.exports = router;
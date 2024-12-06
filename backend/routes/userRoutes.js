const express = require('express');
const router = express.Router();
const userHandler = require('../controllers/userHandler');

router.post('/register', userHandler.registerHandler);
router.post('/login', userHandler.loginHandler);
router.post('/update', userHandler.updateHandler);


module.exports = router;
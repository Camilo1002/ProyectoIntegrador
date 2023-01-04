var express = require('express');
const userController = require('../controllers/usersController');
var router = express.Router();
const usersController = require('../controllers/usersController');




router.get('/users/register', userController.register);
router.post('/users/register', userController.create);
router.get('/users/login', userController.login);
router.post('/users/login', userController.session);
router.get('/users/bienvenida', userController.session)

module.exports = router;
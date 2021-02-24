const express = require('express')
const usersRoutes = express.Router()

const usersController = require('../controllers/users.ctrl');

usersRoutes.get('/users', usersController.list);

usersRoutes.post('/users', usersController.create);

module.exports = usersRoutes;

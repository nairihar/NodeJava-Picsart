

const express = require('express')
const authRoutes = express.Router()

const authCtrl = require('./auth-controller');

// login
authRoutes.post('/auth/login', authCtrl.login);

module.exports = router
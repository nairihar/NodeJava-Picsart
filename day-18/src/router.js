const express = require('express')
const router = express.Router()

const authRoutes = require('./auth/auth-routes');

// public
router.use(authRoutes);

// authorization mid
router.use(authorizationMid);

privateRoutes.forEach(router => {
  router.use(router);
})

module.exports = router
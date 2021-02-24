const express = require('express')
const photosRoutes = express.Router()

// model (Photos)


photosRoutes.get('/photos/', (req, res) => {
  console.log(req.params);
  res.send(`photo ${req.params.username}`);
});

photosRoutes.post('/photos', (req, res) => {
  p = new Photos()

  p.save();

  res.json(p).status().status(201);
});

// REST ful API

module.exports = photosRoutes;

require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const configs = require('./configs/configs');

const server = express()

const usersRoutes = require('./routes/users.routes');
const photosRoutes = require('./routes/photos.routes');

// next('')
// pipeline

// mid 1
server.use(function(req, res, next) {
  console.log(1)
  next()
})

// mid 2
server.use(function(req, res, next) {
  console.log(2)
  // next
})

// mid 2
server.use(function(req, res, next) {
  // next
})

// path

server.use(morgan('dev'));
server.use(express.json());

server.use(usersRoutes);//
server.use(photosRoutes);
// ..

// path
server.use(function(req, res, next) {
  res.json({ error: 404 })
})

// error handler
server.use(function(err, req, res, next) {
  // error: 
})

server.listen(configs.PORT, () => {
  console.log(`Server app listening at http://localhost:${configs.PORT}`)
})


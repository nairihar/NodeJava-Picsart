// require('dotenv').config();

// const express = require('express')
// const morgan = require('morgan')
// const configs = require('./configs/configs');

// const server = express()

// const usersRoutes = require('./routes/users.routes');
// const photosRoutes = require('./routes/photos.routes');

// // next('')
// // pipeline



// server.use(morgan('dev'));
// server.use(express.json());

// server.use(usersRoutes);//
// server.use(photosRoutes);
// // ..

// // path
// server.use(function(req, res, next) {
//   res.json({ error: 404 })
// })

// // error handler
// server.use(function(err, req, res, next) {
//   // error: 
// })

// server.listen(configs.PORT, () => {
//   console.log(`Server app listening at http://localhost:${configs.PORT}`)
// })

// // do not use auth
// GET /blog

// // use auth
// POST /account/user

// // login 
// // create token
// // next time, && private route -> use token
// // if valid ok next
// // if no then error





// // server.use(function(req, res, next) {
// //   // check if the route is private
// //   if (isPublicRoute) {
// //     return next()
// //   }

// //   const token = req.headers.Authorization;

// //   jwt.verify(token, SECRET, function(err, decoded) {
// //     if (err) {
// //       return next(err);
// //     }

// //     const { user_id } = decoded;

// //     User.findById(user_id)
// //       .then(user => {
// //         req.user = user;
// //         next();
// //       });
// //   });
// // })

var jwt = require('jsonwebtoken');


var token = jwt.sign({ foo: 'bar' }, 'shhhhh', { expiresIn: '1h' });
console.log(token)

// general mid

// public

// auth mid

// private routes

// 404


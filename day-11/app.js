// nodejs http
const express = require('express')

const app = express()
const port = 3001
// /users
// /users/username

// /users/0
// /users/sadsahdasdas -> 404
// 

// /msgs

// admin validator
app.use((req, res, next) => {
  debugger;
  if (req.path === '/users/admin') {
    return next(new Error('Forb!'));
  }
  next();
});

// other validation
app.use('/users', (req, res, next) => {
  // is not a admin
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

function pingEndpoint(req, res) {
  res.send('PONG')
}

app.get('/ping', pingEndpoint);

app.get('/users/:username', (req, res) => {
  const { username } = req.params;

  res.status(201).json({
    username,
  });
});

// from this point :: 404

app.use(function(req, res) {
  res.end('404');
});

// 404 page

// error handler
// app.use(function (err, req, res, next) {
//   // err == Forb
//   console.error(err)
//   res.status(400).send('Something broke!')
// });

// /users/6

// const fixedEndpoints = {
//   '/ping': function() {},
//   '/users': function() {}
// };

// const dEndpoints = {
//   [Regexp]: function() {}
// }


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});



app.get
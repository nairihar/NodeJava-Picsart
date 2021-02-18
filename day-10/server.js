const http = require('http');

// request - take
// response - give

const videos = [ {} ];
const photos = [];

function getVideos(request, response) {

}

http
  .createServer((request, response) => {
//     console.log(request.url);

// if () { // /videos
//   getVideos(request, response)
// }

//     response.write('hello\n');
//     response.end();


//     console.log(response);

  // request.on('data', (d) => {
  //   console.log(d.toString());
  // });

  response.end(JSON.stringify({ name: 'something' }));

  }).listen(3001);

console.log('Server running!');


// Homework CRUD Server (HTTP + Postman + nodemon)

// POST createUsers
// GET get All users
// GET get specific user
// PUT update specific user
// DELTE delete specific user
// GET search user (by name)

// GET dajsndljsandlasnd (Something bad)!

// Search example

// Poxos
// Petros
// Aram
// Martiros

// Search -> os

// Use Http status codes(numbers)



// Promise

// callback


library('filename', (err, data) => {
  if (err) {

  }
}); // undefined

///////////////////////////////

// resolve, reject, 
let p = libraryAsync('filename'); // promise object

p.then(() => {

})
.catch(() => {

});



// new Error('myError') => {}

// resolve(throw 'myError')


// Promise.resolve()
//   .then(() => {
//     throw 'error'
//   })
//   .catch(e=>console("Catched ",e));


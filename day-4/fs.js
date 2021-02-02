const fs = require('fs').promises;
const fsCB = require('fs');


// fsCB.readFile('1', function(err, result) {
//   if (err) {

//   } else {
//     // result
//   }
// });


// const p1 = fs.readFile('1');
// const p2 = fs.readFile('2');

// const promises = [ p1, p2 ];


// function myCustomPromiseAll(promises) {

// }

// function myCustomPromiseRace(promises) {
  
// }

// Promise.all(promises)
//   .then(results => {
//     console.log(results[0].toString(), results[1].toString())
//   })
//   .catch(err => {
//     console.log(err)
//   });


// Promise.race(promises)
//   .then(value => {
//     console.log(value.toString())
//   })
//   .catch(err => {
//     console.log(err)
//   });


// function () {
//   for (...) {

//     Promise.resolve()
//       .then(() => {
//         // 
//         return 5;
//       })
//       .then((value) => {
//         // value === 5
//       })
    
//   }
// }

// Promise.all
// Promise.each
// Promise.mapSeries
// Promise.map




// https://www.geeksforgeeks.org/node-js-fs-readdir-method/


fs.readdir('/Users/nairihar/Desktop/picsart/NodeJava/day-4')
  .then(res => {
    console.log(res)
  })

// console.log(__dirname);
// fsCB.readdir(__dirname + '/root/folder2', function(err, res) {
//   console.log(res)
// });

// level 2
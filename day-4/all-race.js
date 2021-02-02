// Promise.all
// wait until all will be finished
// usage

let p = readFileAsyn('something.txt')

Promise.all([
  p, // -> 4
  readFileAsyn('something.txt'),// -> 9
])
  .then((results) => { // array
    // results[4, 9]
  })
  .catch(err => {

  });
////////////////////////////
  Promise.race([
    p, // -> 4
    readFileAsyn('something.txt'),// -> 9
  ])
    .then((n) => { // value
      // 4
    })
    .catch(err => {

    });
// const fs = require('fs');

// const firstFileName = 'File_A';

// fs.readFile('File_A', function(err, content) {
//     if (err) {
//       return console.error('Something wrong');
//     }
//     console.log(content.toString())
// });


const fs = require('fs').promises;



fs.readFile('samdnasdnasdnas')
  .then(() => {
    return fs.readFile('dasdasda');
  })
  .catch((err) => {
    console.log(0, err);
    return 1
  })
  .then(newFileName => fs.readFile(newFileName.toString()))
  .then(otherFileName => fs.readFile('otherFileName.toString()'))
  .then(code => {
    console.log(code.toString())
  })
  .catch(err => {
    console.log(1, err);
  });



// fs.readFile('File_A')
//   .then(() => {
//     dsadasdasd
//   }, err => {
//     console.log(1, err);
//   })

//   .then(() => {
    
//   }, err => {
//     console.log(2, err);
//   });

// fs.readFile('File_A')
//   .then(() => {
//     dsadasdasd
//   })
//   .catch(err => {
//     console.log(1, err);
//   });


  


// async callback

function readFile(number, text, callbck) {
  // some process

  callbck(new Error('something'), null);

  callbck(null, '');
}


function asynCalback(err, data) {
  if (err) {

  }
}

readFile(1, 'text', asynCalback)


///////////////////////




function foo(cb) {
  cb()
}

foo(function() {
  for ...
})



readFileAsync = promisify(fs.readFile)

readFileAsync('filename')
  .then()

fs.promises.readFile('filename')
  .then()




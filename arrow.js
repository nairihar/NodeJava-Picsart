// sync
// + - , while, for, 


// async

function sum(cb, a, b) {
  // n -> 1
  // t -> 'hello'

  cb(a + b);
}

sum(function(value) {
  console.log(value);
}, 1, 2);



function foo() {


  return undefined;
}
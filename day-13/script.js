const dbURL = 'mongodb+srv://testuser:testpassword@cluster0.pn8zf.mongodb.net/mytestdb';

const mongoose = require('mongoose');

mongoose.connect(dbURL, {
  useNewUrlParser: true, useUnifiedTopology: true
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'MyCatName' });

kitty.save()
  .then(() => console.log('meow'));


  Cat.find({
    age: 50
  })
    .then(allCats => {
      
    })



// Sessions (Collection)
// insert item, session_Id, user_id: 1234, validUntil: 2022
// ...

// Session
// picsart.com/login
//  -> email, password


-> adsadsadasndlasd.asdasdas.das.das.dasd


// PORT picsart.com/account (header)
    // token -> 
    // 



const SECRET = '12313^%^&%&dkjandkajs&^%';

// email, password
// get user by email -> user
// check(password, user.password)
//
// create jwt user SECRET use this data { user.user_id }
// asdjknasdkjnsadkjnad


PUT /users/:usert_id  { name: 'Poxos' }
    // headers (asdjknasdkjnsadkjnad)
  
// validate header token using this SECRET key
// const { user_id } = token
// get user from db by user_id
// change name

// Authorization: "Bearer asdjknasdkjnsadkjnad"


// 
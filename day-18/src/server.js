if (notProd) {
  require('dotenv')
}

const express = require('express')
const mongoose = require('mongoose')

const router = require('./router');
const configs = require('./configs');

const app = express()

app.use(express.json())

// custom routes
app.use(router);

mongoose.connect(configs.db.url, configs.db.options)
  .then(() => {
    console.log('MongoDB is connected');
    app.listen(configs.env.PORT, () => {
      console.log(`Server is running ${configs.env.PORT}`);
    });
  })
  .catch(err => console.log(err));



const fs = require('fs')
const express = require('express')
const app = express()
const port = 3030


function implementStatic() {
  // express.static
  // ...
}

// app.use('/public', express.static('public'))

app.get('/image', (req, res, next) => {
  const buffer = fs.readFileSync('./public/sample.pdf');

  // Content Type
  // res.setHeader('content-type', 'image/png');
  // res.setHeader('content-type', 'image/jpeg');
  // res.setHeader('content-type', 'text/enriched');
  res.setHeader('content-type', 'application/pdf');

  res.send(buffer);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

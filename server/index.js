const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.send('{durgesh:kadwe}');
})

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`)
})
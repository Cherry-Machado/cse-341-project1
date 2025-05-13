const express = require('express');
const mongodb = require('./data/database');
const app = express();
const process = require('process');
require('dotenv').config();

app.use('/', require('./routes')); 

app.get('/', (req, res) => {
  res.send("Hello");
});
 
const port = process.env.PORT || 3000; // Fallback to 3000 if no env var

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => { console.log('Database is listening and Node running on port ' + port)});
  }
});
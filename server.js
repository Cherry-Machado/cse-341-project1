const express = require('express');
const app = express();
const process = require('process');
require('dotenv').config();
 
app.get('/', (req, res) => {
  res.send("Hello");
});
 
const port = process.env.PORT || 3000; // Fallback to 3000 if no env var

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// signup route
app.post('/signup', (req, res) => {
  console.log(req.body);
  res.send('hello');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));

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
  const { firstName, lastName, email } = req.body;

  // make sure fields are filled
  if(!firstName || !lastName || !email) {
    res.redirect('/fail.html');
    return;
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));

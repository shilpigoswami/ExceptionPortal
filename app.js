const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});


mongoose.connection.on('error', (err) => {
  console.log('database error '+error);
});

const app = express();

const exceptionTickets = require('./routes/exceptionTickets');

const port = 3000;

app.use(cors());

app.use('/exceptionTickets', exceptionTickets);

// Body Parser Middleware
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});

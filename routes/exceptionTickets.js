const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ticket = require('../models/exceptionticket');
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');

router.get('/tickets', (req, res, next) =>{
  //res.json({exceptionticket: req.exceptionticket});
  Ticket.find({}, function(err, tickets){
  res.json({exceptionticket: tickets});
});








});

module.exports = router;

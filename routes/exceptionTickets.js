const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ticket = require('../models/exceptionticket');
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');

router.get('/tickets', (req, res, next) =>{
  //res.json({exceptionticket: req.exceptionticket});
  var ticketType = req.query.tickettype;
  var violationType = req.query.violationtype;

  Ticket.find({tickettype:ticketType, violationdetail:violationType}, function(err, tickets){
  res.json({exceptionticket: tickets});
});








});

module.exports = router;

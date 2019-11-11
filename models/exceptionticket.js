const mongoose = require('mongoose');
const config = require('../config/database');

// tickets Schema
const TicketSchema = mongoose.Schema({
  requestnumber: {
    type: String,
    required: true
  },
  violationdetail: {
    type: String
  },
  assignee: {
    type: String
  },
  tickettype: {
    type: String
  }
});

const Ticket = module.exports = mongoose.model('Ticket', TicketSchema, 'ExceptionTickets');

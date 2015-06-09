var mongoose = require('mongoose');

 
var TicketSchema = mongoose.Schema({
  cinema: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

 

var ticket = mongoose.model('ticket', TicketSchema);
module.exports = ticket;
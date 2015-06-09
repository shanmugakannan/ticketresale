var mongoose = require('mongoose');

 
var TicketSchema = mongoose.Schema({
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "ticketschema",
  "type": "object",
  "properties": {
    "cinema": {
      "id": "cinema",
      "type": "string"
    },
    "movie": {
      "id": "movie",
      "type": "string"
    },
    "time": {
      "id": "time",
      "type": "string"
    }
  },
  "required": [
    "cinema",
    "movie",
    "time"
  ]
});

 

var tickets = mongoose.model('model', TicketSchema,'tickets');
module.exports = ticket;

var mongoose = require('mongoose');

 
var TicketSchema = mongoose.Schema({
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
module.exports = tickets;

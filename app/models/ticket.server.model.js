var mongoose = require('mongoose');

module.exports = mongoose.model('ticketmodel', {
    name : {type : String, default: 'Allow One'}
});

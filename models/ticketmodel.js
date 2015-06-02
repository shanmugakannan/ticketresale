// mongoose module
var mongoose = require('mongoose');

module.exports = mongoose.model('ticket', {
    name : {type : String, default: ''}
});

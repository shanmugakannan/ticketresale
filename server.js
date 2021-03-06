// modules =================================================
var express        = require('express');
var app            = express();
var mongoose = require('mongoose');

// configuration ===========================================
var db = require('./app/config/db');

// set our port
var port = process.env.PORT || 8080; 

//Connect to database
mongoose.connect(db.url);

// set the static files location /public/img will be /img 
app.use(express.static(__dirname + '/public/modules/ticket/')); 

// routes ==================================================
require('./app/routes/ticket.server.routes')(app); // configure our routes

// start app ===============================================
app.listen(port);               

// Console.log                  
console.log('Ticket Resale runs on ' + port);

// expose app           
exports = module.exports = app;

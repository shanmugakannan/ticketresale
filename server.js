// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var mongoose = require('mongoose');    

//Logging =================================================
var logentries = require('node-logentries');
var log = logentries.logger({
  token:'2fc29b03-5bc8-4bbf-8b50-da90a60e9bfe'
});

// configuration ===========================================
var db = require('./app/config/db');

// set our port
var port = process.env.PORT || 8080; 

//Connect to database
mongoose.connect(db.url);
log.info("Connected to MongoDB");

// set the static files location /public/img will be /img 
app.use(express.static(__dirname + '/public/modules/ticket/')); 

// routes ==================================================
require('./app/routes/ticket.server.routes')(app); // configure our routes

// start app ===============================================
app.listen(port);               

// Console.log                  
console.log('Ticket Resale runs on ' + port);
log.info('Ticket Resale runs on ' + port");
// expose app           
exports = module.exports = app;

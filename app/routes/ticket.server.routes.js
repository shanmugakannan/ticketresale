

    var ticket = require('../models/ticket.server.model');
	
    module.exports = function(app) {

        // server routes ===========================================================		
		app.get('/ticket/get', function(req, res) {
            // use mongoose to get all nerds in the database
            ticket.find(function(err, tickets) {
                if (err)
                    res.send('error');

                res.json(tickets); // return all tickets 
            });
        });
		
        // route to handle authentication routes goes here
        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
         app.get('*', function(req, res) {
            res.sendFile('index.html', { root: './public/modules/ticket/views/' }); // load index.html file
        });

    };

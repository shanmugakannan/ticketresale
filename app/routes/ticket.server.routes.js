
    module.exports = function(app) {

        // server routes ===========================================================
        // route to handle authentication routes goes here
        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
         app.get('*', function(req, res) {
            res.sendfile('./public/modules/ticket/views/index.html'); // load our public/index.html file
        });

    };

var passport = require('passport');

module.exports.express = {
    customMiddleware: function(app){

        // Passport
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(function(req, res, next){
            res.locals.userred = req.session.userred;
            
            next();
        });

    }
};
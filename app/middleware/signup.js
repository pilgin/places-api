'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    return function (req, res, next) {
        var body = req.body;

        // Get the user servie and `create` a new user
        app.service('users').create({
            email: body.email,
            password: body.password
        })
        // Then redirect to the login page
        .then(function (user) {
            return res.redirect('/login');
        })
        // On errors, just call our error middleware
        .catch(next);
    };
};

;
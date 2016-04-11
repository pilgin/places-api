'use strict';

var service = require('feathers-mongoose');
var places = require('./places-model');
var hooks = require('./hooks');

module.exports = function () {
    var app = this;

    var options = {
        Model: places,
        paginate: {
            default: 5,
            max: 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/places', service(options));

    // Get our initialize service to that we can bind hooks
    var placesService = app.service('/places');

    // Set up our before hooks
    placesService.before(hooks.before);

    // Set up our after hooks
    placesService.after(hooks.after);
};
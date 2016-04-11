'use strict';

// places-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    photos: [{
        name: String,
        comment: String,
        path: String
    }],
    createdAt: {
        type: Date,
        'default': Date.now
    },
    updatedAt: {
        type: Date,
        'default': Date.now
    }
});

var placesModel = mongoose.model('places', placesSchema);

module.exports = placesModel;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var placeSchema = new Schema({
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
        default: Date.now
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

var placeModel = _mongoose2.default.model('Place', placeSchema);

exports.default = placeModel;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.db = undefined;
exports.default = initDb;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _feathersMongoose = require('feathers-mongoose');

var _feathersMongoose2 = _interopRequireDefault(_feathersMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db;

function initDb() {
    var mongoPath = _index2.default.get('mongodb');

    _mongoose2.default.Promise = global.Promise;

    _mongoose2.default.connect(mongoPath);

    exports.db = db = _mongoose2.default.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
    });
};

exports.db = db;
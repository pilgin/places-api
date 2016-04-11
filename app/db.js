'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _feathersMongoose = require('feathers-mongoose');

var _feathersMongoose2 = _interopRequireDefault(_feathersMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoPath = _app2.default.get('mongodb');

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(mongoPath);

var db = _mongoose2.default.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

exports.default = _mongoose2.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = services;

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _place = require('./place');

var _place2 = _interopRequireDefault(_place);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function services() {
    var app = this;

    app.configure(_authentication2.default).configure(_user2.default).configure(_place2.default);
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var app = this;

    app.use((0, _notFoundHandler2.default)());
    app.use((0, _logger2.default)(app));
    app.use((0, _handler2.default)());
};

var _handler = require('feathers-errors/handler');

var _handler2 = _interopRequireDefault(_handler);

var _notFoundHandler = require('./not-found-handler');

var _notFoundHandler2 = _interopRequireDefault(_notFoundHandler);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
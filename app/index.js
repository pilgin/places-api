'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _feathers = require('feathers');

var _feathers2 = _interopRequireDefault(_feathers);

var _feathersConfiguration = require('feathers-configuration');

var _feathersConfiguration2 = _interopRequireDefault(_feathersConfiguration);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serveStatic = _feathers2.default.static;

var app = (0, _feathers2.default)();

app.configure((0, _feathersConfiguration2.default)(_path2.default.join(__dirname, '..')));

exports.default = app;


app.use((0, _compression2.default)()).use('/api', _api2.default).use((0, _serveFavicon2.default)(_path2.default.join(app.get('public'), 'favicon.ico'))).use('/', serveStatic(app.get('public')));

(0, _db2.default)();

var port = app.get('port');
var server = app.listen(port);

server.on('listening', function () {
    return console.log('Feathers application started on ' + app.get('host') + ':' + port);
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _feathers = require('feathers');

var _feathers2 = _interopRequireDefault(_feathers);

var _feathersConfiguration = require('feathers-configuration');

var _feathersConfiguration2 = _interopRequireDefault(_feathersConfiguration);

var _feathersHooks = require('feathers-hooks');

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _feathersRest = require('feathers-rest');

var _feathersRest2 = _interopRequireDefault(_feathersRest);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _feathersPrimus = require('feathers-primus');

var _feathersPrimus2 = _interopRequireDefault(_feathersPrimus);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _feathers2.default)();
var serveStatic = _feathers2.default.static;

app.configure((0, _feathersConfiguration2.default)(_path2.default.join(__dirname, '..')));

app.use((0, _compression2.default)()).use((0, _serveFavicon2.default)(_path2.default.join(app.get('public'), 'favicon.ico'))).use('/', serveStatic(app.get('public'))).use(_bodyParser2.default.json()).use(_bodyParser2.default.urlencoded({
    extended: true
})).configure((0, _feathersHooks2.default)()).configure((0, _feathersRest2.default)()).configure((0, _feathersPrimus2.default)({
    transformer: 'websockets'
})).configure(_services2.default).configure(_middleware2.default);

exports.default = app;
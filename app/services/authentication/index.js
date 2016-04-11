'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = authService;

var _feathersAuthentication = require('feathers-authentication');

var _feathersAuthentication2 = _interopRequireDefault(_feathersAuthentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authService() {
    var app = this;

    var defaultConfig = app.get('auth');
    var config = Object.assign({}, defaultConfig, { userEndpoint: 'user' });

    app.configure((0, _feathersAuthentication2.default)(config));
};
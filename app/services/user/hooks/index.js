'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.after = exports.before = undefined;

var _hooks = require('../../../hooks');

var _hooks2 = _interopRequireDefault(_hooks);

var _feathersHooks = require('feathers-hooks');

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _feathersAuthentication = require('feathers-authentication');

var _feathersAuthentication2 = _interopRequireDefault(_feathersAuthentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = _feathersAuthentication2.default.hooks;

var before = exports.before = {
  all: [],
  find: [auth.verifyToken(), auth.populateUser(), auth.requireAuth()],
  get: [auth.verifyToken(), auth.populateUser(), auth.requireAuth()],
  create: [auth.hashPassword()],
  update: [auth.verifyToken(), auth.populateUser(), auth.requireAuth()],
  patch: [auth.verifyToken(), auth.populateUser(), auth.requireAuth()],
  remove: [auth.verifyToken(), auth.populateUser(), auth.requireAuth()]
};

var after = exports.after = {
  all: [_feathersHooks2.default.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.after = exports.before = undefined;

var _hooks = require('../../../hooks');

var _hooks2 = _interopRequireDefault(_hooks);

var _feathersHooks = require('feathers-hooks');

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var before = exports.before = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};

var after = exports.after = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
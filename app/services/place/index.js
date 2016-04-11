'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = placeService;

var _feathersMongoose = require('feathers-mongoose');

var _feathersMongoose2 = _interopRequireDefault(_feathersMongoose);

var _place = require('./models/place');

var _place2 = _interopRequireDefault(_place);

var _hooks = require('./hooks');

var hooks = _interopRequireWildcard(_hooks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = '/place';

function placeService() {
    var app = this;

    var options = {
        Model: _place2.default,
        paginate: {
            default: 5,
            max: 25
        }
    };

    app.use(path, (0, _feathersMongoose2.default)(options));
    var placeService = app.service(path);

    placeService.before(hooks.before);
    placeService.after(hooks.after);
};
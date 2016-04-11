'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _app2.default.get('port');
var server = _app2.default.listen(port);

server.on('listening', function () {
  return console.log('Feathers application started on ' + _app2.default.get('host') + ':' + port);
});
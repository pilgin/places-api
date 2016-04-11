'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {}
    },
    password: {
        type: String,
        required: true
    }

});

var placeModel = _mongoose2.default.model('User', userSchema);

module.exports = placeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyL3VzZXItbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTSxTQUFTLG1CQUFTLE1BQVQ7O0FBRWYsSUFBTSxhQUFhLElBQUksTUFBSixDQUFXO0FBQzFCLFdBQU87QUFDSCxjQUFNLE1BQU47QUFDQSxrQkFBVSxJQUFWO0FBQ0EsZUFBTyxFQUFQO0tBSEo7QUFLQSxjQUFVO0FBQ04sY0FBTSxNQUFOO0FBQ0Esa0JBQVUsSUFBVjtLQUZKOztDQU5lLENBQWI7O0FBYU4sSUFBTSxhQUFhLG1CQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCLFVBQXZCLENBQWI7O0FBRU4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6InVzZXItbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBpbmRleDoge31cbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG5cbn0pO1xuXG5jb25zdCBwbGFjZU1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGFjZU1vZGVsO1xuIl19
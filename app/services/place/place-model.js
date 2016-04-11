'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    photos: [{
        name: String,
        comment: String,
        path: String
    }],
    createdAt: {
        type: Date,
        'default': Date.now
    },
    createdBy: {
        type: Shema.Types.ObjectId,
        ref: 'Users'
    },
    updatedAt: {
        type: Date,
        'default': Date.now
    }
});

var placeModel = _mongoose2.default.model('Place', placeSchema);

module.exports = placeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9wbGFjZS9wbGFjZS1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxJQUFNLFNBQVMsbUJBQVMsTUFBVDs7QUFFZixJQUFNLGNBQWMsSUFBSSxNQUFKLENBQVc7QUFDM0IsVUFBTTtBQUNGLGNBQU0sTUFBTjtBQUNBLGtCQUFVLElBQVY7S0FGSjtBQUlBLGlCQUFhO0FBQ1QsY0FBTSxNQUFOO0tBREo7QUFHQSxZQUFRLENBQUM7QUFDTCxjQUFNLE1BQU47QUFDQSxpQkFBUyxNQUFUO0FBQ0EsY0FBTSxNQUFOO0tBSEksQ0FBUjtBQUtBLGVBQVc7QUFDUCxjQUFNLElBQU47QUFDQSxtQkFBVyxLQUFLLEdBQUw7S0FGZjtBQUlBLGVBQVc7QUFDUCxjQUFNLE1BQU0sS0FBTixDQUFZLFFBQVo7QUFDTixhQUFLLE9BQUw7S0FGSjtBQUlBLGVBQVc7QUFDUCxjQUFNLElBQU47QUFDQSxtQkFBVyxLQUFLLEdBQUw7S0FGZjtDQXJCZ0IsQ0FBZDs7QUEyQk4sSUFBTSxhQUFhLG1CQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCLFdBQXhCLENBQWI7O0FBRU4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6InBsYWNlLW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuXG5jb25zdCBwbGFjZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBwaG90b3M6IFt7XG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgY29tbWVudDogU3RyaW5nLFxuICAgICAgICBwYXRoOiBTdHJpbmdcbiAgICB9XSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgJ2RlZmF1bHQnOiBEYXRlLm5vd1xuICAgIH0sXG4gICAgY3JlYXRlZEJ5OiB7XG4gICAgICAgIHR5cGU6IFNoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdVc2VycydcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICAnZGVmYXVsdCc6IERhdGUubm93XG4gICAgfVxufSk7XG5cbmNvbnN0IHBsYWNlTW9kZWwgPSBtb25nb29zZS5tb2RlbCgnUGxhY2UnLCBwbGFjZVNjaGVtYSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGxhY2VNb2RlbDtcbiJdfQ==
import errors from 'feathers-errors';
import winston from 'winston';

export default function() {
    return function(req, res, next) {
        winston.log('Time:', Date.now());

        next(new errors.NotFound('Page not found'));
    };
};

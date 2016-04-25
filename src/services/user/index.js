import service from 'feathers-mongoose';
import model from './models/user';
import * as hooks from './hooks';

import uploads from './middleware/uploads';

const path = '/user';

export default function userService() {
    const app = this;

    const options = {
        Model: model,
        paginate: {
            default: 5,
            max: 25
        }
    };

    app.use(path, uploads(app).single('avatar'), function (req, res, next) {
        console.log(arguments);

        if (req.file) {
            req.body.avatar = req.file;
        };

        next();
    }, service(options));

    const userService = app.service(path);

    userService.before(hooks.before);
    userService.after(hooks.after);
};

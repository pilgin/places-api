import service from 'feathers-mongoose';
import model from './models/user';
import * as hooks from './hooks';

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

    app.use(path, service(options));

    const userService = app.service(path);

    userService.before(hooks.before);
    userService.after(hooks.after);
};

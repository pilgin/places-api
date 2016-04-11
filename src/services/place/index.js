import service from 'feathers-mongoose';
import model from './models/place';
import * as hooks from './hooks';

const path = '/place';

export default function placeService() {
    const app = this;

    const options = {
        Model: model,
        paginate: {
            default: 5,
            max: 25
        }
    };

    app.use(path, service(options));
    const placeService = app.service(path);

    placeService.before(hooks.before);
    placeService.after(hooks.after);
};

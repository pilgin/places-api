import service from 'feathers-mongoose';
import model from './models/place';
import * as hooks from './hooks';

import uploads from './middleware/uploads';

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

    // #TODO:0 change field name for db write
    app.use(path, uploads(app).array('photos'), function (req, res, next) {
        console.log(arguments);

        if (req.files && req.files.length) {
            req.body.photos = req.files;
        }
        
        next();
    }, service(options));

    const placeService = app.service(path);

    placeService.before(hooks.before);
    placeService.after(hooks.after);
};

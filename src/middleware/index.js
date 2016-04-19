import handler from 'feathers-errors/handler';

import notFound from './not-found-handler';
import logger from './logger';
import uploads from './uploads';

export default function() {
    const app = this;

    app.use(uploads(app))
        .use(function afterUploads(req, res, next) {
            console.log(arguments);
            
            next();
        })
        .use(notFound())
        .use(logger(app))
        .use(handler());
};

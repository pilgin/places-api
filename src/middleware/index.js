import handler from 'feathers-errors/handler';

import notFound from './not-found-handler';
import logger from './logger';

export default function() {
    const app = this;

    app.use(notFound())
        .use(logger(app))
        .use(handler());
};

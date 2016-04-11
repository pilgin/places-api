import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import feathers from 'feathers';
import configuration from 'feathers-configuration';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import bodyParser from 'body-parser';
import primus from 'feathers-primus';
import middleware from './middleware';
import services from './services';

const app = feathers();
const serveStatic = feathers.static;

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
    .use(favicon(path.join(app.get('public'), 'favicon.ico')))
    .use('/', serveStatic(app.get('public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .configure(hooks())
    .configure(rest())
    .configure(primus({
        transformer: 'websockets'
    }))
    .configure(services)
    .configure(middleware);

export default app;

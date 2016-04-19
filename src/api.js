import feathers from 'feathers';
import configuration from 'feathers-configuration';
import path from 'path';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import bodyParser from 'body-parser';
import primus from 'feathers-primus';
import middleware from './middleware';
import services from './services';

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(bodyParser.json({limit: '5mb'}))
    .use(bodyParser.urlencoded({
        extended: true,
        limit: '5mb'
    }))
    .configure(hooks())
    .configure(rest())
    .configure(primus({
        transformer: 'websockets'
    }))
    .configure(services)
    .configure(middleware);

export default app;

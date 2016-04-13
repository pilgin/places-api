import feathers from 'feathers';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import bodyParser from 'body-parser';
import primus from 'feathers-primus';
import middleware from './middleware';
import services from './services';

const app = feathers();

app.use(bodyParser.json())
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

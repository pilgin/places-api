import feathers from 'feathers';
import configuration from 'feathers-configuration';
import compress from 'compression';
import path from 'path';
import favicon from 'serve-favicon';
import api from './api';
import initDb from './db';

const serveStatic = feathers.static;

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

export default app;

app.use(compress())
    .use('/api', api)
    .use(favicon(path.join(app.get('public'), 'favicon.ico')))
    .use('/', serveStatic(app.get('public')));

initDb();

const port = app.get('port');
const server = app.listen(port);

server.on('listening', () => console.log(`Feathers application started on ${app.get('host')}:${port}`));
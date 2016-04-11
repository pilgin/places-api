import app from './app';
import db from './db';

const port = app.get('port');
const server = app.listen(port);

server.on('listening', () => console.log(`Feathers application started on ${app.get('host')}:${port}`));

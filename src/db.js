import mongoose from 'mongoose';
import app from './index';
import feathersMongoose from 'feathers-mongoose';

var db;

export default function initDb() {
    const mongoPath = app.get('mongodb');

    mongoose.Promise = global.Promise;

    mongoose.connect(mongoPath);

    db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
    });
};

export {db};
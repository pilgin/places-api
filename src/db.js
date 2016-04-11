import mongoose from 'mongoose';
import app from './app';
import feathersMongoose from 'feathers-mongoose';

const mongoPath = app.get('mongodb');

mongoose.Promise = global.Promise;

mongoose.connect(mongoPath);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

export default mongoose;
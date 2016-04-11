import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {}
    },
    password: {
        type: String,
        required: true
    }

});

const userModel = mongoose.model('User', userSchema);

export default userModel;

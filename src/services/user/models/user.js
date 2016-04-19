import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: {}
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    }

});

const userModel = mongoose.model('User', userSchema);

export default userModel;

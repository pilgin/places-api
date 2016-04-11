import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    photos: [{
        name: String,
        comment: String,
        path: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const placeModel = mongoose.model('Place', placeSchema)

export default placeModel;

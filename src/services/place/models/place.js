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
    photos: [Schema.Types.Mixed],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const placeModel = mongoose.model('Place', placeSchema);

export default placeModel;

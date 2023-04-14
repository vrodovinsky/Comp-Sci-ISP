const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Body: {
        type: String,
        required: true
    },
    Provider_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    User_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    User_name: {
        type: String,
        required: true
    }
});

const Reviews = mongoose.model('reviews', reviews);

module.exports = Reviews;
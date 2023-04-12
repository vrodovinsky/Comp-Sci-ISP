const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Body: {
        type: String,
        required: true
    },
    Provider_id: {
        type: mongoose.Schema.Types.ObjectId,
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
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    User_name: {
        type: String,
        required: true
    }
});

const Reviews = mongoose.model('reviews', reviewsSchema);

module.exports = Reviews;
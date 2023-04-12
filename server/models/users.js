const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    User_type: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', usersSchema);

module.exports = User;
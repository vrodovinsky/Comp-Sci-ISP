const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Object,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    User_type: {
        type: String,
    },
    Location: {
        type: String,
    },
});

const User = mongoose.model('users');

module.exports = User;
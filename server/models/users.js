const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    Name: {
        type: String,
        required: true
    },
    User_type: {
        type: String,
        required: true
    },
    Location: {
        type: String
    }
});

const User = mongoose.model('users', users);

module.exports = User;
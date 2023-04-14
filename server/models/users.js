const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
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

const User = mongoose.model('users', users);

module.exports = User;
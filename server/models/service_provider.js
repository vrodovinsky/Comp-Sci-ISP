const mongoose = require('mongoose');

const service_provider = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Services: [
        {
            type: String
        }
    ],
    User_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const Service_provider = mongoose.model('service_provider');

module.exports = Service_provider;
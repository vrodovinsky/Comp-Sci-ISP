const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service_provider = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
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
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Service_provider = mongoose.model('service_provider', service_provider);

module.exports = Service_provider;
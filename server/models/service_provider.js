const mongoose = require('mongoose');

const service_providerSchema = new mongoose.Schema({
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

const Service_provider = mongoose.model('service_provider', service_providerSchema);

module.exports = Service_provider;
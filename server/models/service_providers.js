const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service_providers = new Schema({
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

const Service_providers = mongoose.model('service_providers', service_providers);

module.exports = Service_providers;
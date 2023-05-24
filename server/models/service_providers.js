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
        new Schema({
            Name: {
                type: String,
                required: true
            },
            Description: {
                type: String,
                required: true
            },
            Price: {
                type: String,
                required: true
            }
        })
    ],
    Email: {
        type: String,
        required: true
    },
    Location: {
        Latitude: {
            type: Schema.Types.Decimal128
        },
        Longitude: {
            type: Schema.Types.Decimal128
        }
    },
});

const Service_providers = mongoose.model('service_providers', service_providers);

module.exports = Service_providers;
const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Booking_date: {
        type: Date,
        required: true
    },
    Client_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Registered_date: {
        type: Date,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
});

const Appointments = mongoose.model('appointments', appointmentsSchema);

module.exports = Appointments;
var appointments = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Booking_date: {
        type: Date,
        required: true
    },
    Client_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Provider_id: {
        type: Schema.Types.ObjectId,
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
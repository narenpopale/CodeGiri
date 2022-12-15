const mongoose = require('mongoose');

const organizerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    designation: {
        type: String
    },
    SetedContests: {
        type: Array
    }
}) 

// Exports Organizer model
module.exports = mongoose.model("Organizer", organizerSchema);
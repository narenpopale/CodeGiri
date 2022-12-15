const mongoose = require('mongoose');

const contestsSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        dafault: "Upcoming"
    }
})

// Exports Contests model
module.exports = mongoose.model("Contests", contestsSchema);
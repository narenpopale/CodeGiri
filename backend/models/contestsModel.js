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
    start: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

// Exports Contests model
module.exports = mongoose.model("Contests", contestsSchema);
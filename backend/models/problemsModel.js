const mongoose = require('mongoose');

const problemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contestCode: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inputFormat: {
        type: String,
        required: true
    },
    outputFormat: {
        type: String,
        required: true
    },
    constraints: {
        type: String,
        required: true
    },
    sampleInput: {
        type: String,
        required: true
    },
    sampleOutput: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    }
})

// Exports Problems model
module.exports = mongoose.model("Problems", problemsSchema);
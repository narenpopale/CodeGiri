const mongoose = require('mongoose');

const problemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contestCode: {
        type: String,
        default: "JAN221"
    },
    difficulty: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "New"
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
    },
    testCases: {
        type: Array,
        required: true
    }
})

// Exports Problems model
module.exports = mongoose.model("Problems", problemsSchema);
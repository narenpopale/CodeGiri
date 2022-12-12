const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
    YearofStudy: {
        type: Number
    },
    SolvedProblems: {
        type: Array
    }
})

// Exports User model
module.exports = mongoose.model("User", userSchema);
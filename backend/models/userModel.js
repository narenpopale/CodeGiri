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
    mobile: {
        type: String,
        required: true        
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Number,
        required: true
    },
    is_varified:{
        type: Number,
        default: 0
    },
    department: {
        type: String
    },
    YearofStudy: {
        type: Number
    },
    SolvedProblems: {
        type: Array,
        default: []
    }
})

// Exports User model
module.exports = mongoose.model("User", userSchema);
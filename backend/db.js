const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if (!err) {
        console.log("DB Connection Successful");
    }
    else{
        console.log("Error in DB Connection");
    }
})

module.exports = mongoose;
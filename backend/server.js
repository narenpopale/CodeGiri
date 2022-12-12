const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors');
require("dotenv/config");
const mongoose = require("./db");


// Routes Import
const userRoutes = require("./routes/userRoutes");
const organizerRoutes = require("./routes/organizerRoutes");
const problemsRoutes = require("./routes/problemsRoutes");
const contestsRoutes = require("./routes/contestsRoutes");


const app = express();
const port = process.env.PORT;
app.use(bodyparser.json());
app.use(cors());


// Rotes Config
app.use("/user",userRoutes);
app.use("/organizer",organizerRoutes);
app.use("/problems",problemsRoutes);
app.use("/contests",contestsRoutes);


mongoose.set('strictQuery', true);


// Server Listening
app.listen(port, () => {
    console.log(`Server runnning on port ${port}`)
});
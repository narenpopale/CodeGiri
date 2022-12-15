const express = require("express");
const Organizer = require("../models/organizerModel");

const router = express.Router();


// Register New Organizer
router.route('/register').post(async (req, res) => {
    let organizer = new Organizer(req.body);

    try {
        const org = await organizer.save();
        res.json(org);
    }
    catch (error) {
        res.json(error);
    }
});


// Login Organizer
router.route('/login').post((req, res) => {
    let organizerData = req.body
    Organizer.findOne({ email: organizerData.EmailOrg }, (err, organizer) => {
        if (err) {
            console.log(err)
        } else {
            if (!organizer) {
                res.json('Invalid Email')
            }
            else if (organizer.password !== organizerData.PasswordOrg) {
                res.json('Invalid Password')
            }
            else {
                res.json('Valid');
            }
        }
    })
})


// Add Seted Contests --> Call two functions and put contest code in the body
var arr = [];

router.get("/seted/:id",async (req,res)=>{
    const organizer = await Organizer.findById(req.params.id);
    res.json(organizer);
    arr = organizer.SetedContests;
})

router.route("/seted/:id").patch(async (req, res) => {
    try {
        arr.push(req.body.code);
        const organizer = await Organizer.updateOne(
            { _id : req.params.id},
            { $set: { SetedContests: arr} }
        )
        res.json(organizer);
    }
    catch (error) {
        res.json(error);
    }
})

module.exports = router;
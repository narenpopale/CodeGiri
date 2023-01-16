const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Organizer = require("../models/organizerModel");

const router = express.Router();


// Used Hashing to Secure Password
const securedPassword = async (Password) => {
    try {
        const hashedPassword = await bcrypt.hash(Password, 10);
        return hashedPassword;
    }
    catch (error) {
        console.log(error);
    }
}


// Register New Organizer
router.route('/register').post(async (req, res) => {

    try {
        const password = await securedPassword(req.body.password);

        let organizer = new Organizer({
            name: req.body.name,
            email: req.body.email,
            password: password,
            department: req.body.department,
            designation: req.body.designation
        });

        const org = await organizer.save();

        if (!org) {
            console.log("Error!");
            res.json({});
        }
        else {

            let payload = { subject: org._id };
            let token = jwt.sign(payload, 'secretKey');
            res.json({ "token": token, "is_admin": 1 });

        }

    }
    catch (error) {
        res.json(error);
    }
});


// Login Organizer
router.route('/login').post((req, res) => {

    try {

        let email = req.body.EmailOrg;
        let password = req.body.PasswordOrg;

        Organizer.findOne({ email: email }, async (err, organizer) => {
            if (err) {
                console.log(err)
            }
            else {

                if (!organizer) {
                    res.json('Invalid Email')
                }
                else {

                    // Password Decription
                    const matchPassword = await bcrypt.compare(password, organizer.password);

                    if (!matchPassword) {
                        res.json('Invalid Password')
                    }
                    else {

                        let payload = { subject: organizer._id };
                        let token = jwt.sign(payload, 'secretKey');
                        res.json({ "token": token, "is_admin": 1 });

                    }

                }

            }
        })

    }
    catch (error) {
        res.json(error);
    }

})


// Add Seted Contests --> Call two functions and put contest code in the body
var arr = [];

router.get("/seted/:id", async (req, res) => {
    const organizer = await Organizer.findById(req.params.id);
    res.json(organizer);
    arr = organizer.SetedContests;
})

router.route("/seted/:id").patch(async (req, res) => {
    try {
        arr.push(req.body.code);
        const organizer = await Organizer.updateOne(
            { _id: req.params.id },
            { $set: { SetedContests: arr } }
        )
        res.json(organizer);
    }
    catch (error) {
        res.json(error);
    }
})

module.exports = router;
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

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


// Register New User
router.route('/register').post(async (req, res) => {

    try {
        const password = await securedPassword(req.body.Password);

        let user = new User({
            name: req.body.Name,
            email: req.body.Email,
            mobile: req.body.Mobile,
            password: password,
            is_admin: 0,
            department: req.body.Department,
            YearofStudy: req.body.YearofStudy
        });

        const savedPost = await user.save();

        if (!savedPost) {
            console.log("Error!");
            res.json({});
        }
        else {

            let payload = { subject: savedPost._id };
            let token = jwt.sign(payload, 'secretKey');
            res.json({ "token": token, "is_admin": 0 });

        }

    }
    catch (error) {
        res.json(error);
    }
});


// Login User
router.route('/login').post((req, res) => {

    try {

        let useremail = req.body.Email;
        let userpassword = req.body.Password;
        User.findOne({ email: useremail }, async (err, user) => {
            if (err) {
                console.log(err)
            }
            else {

                if (!user) {
                    res.json('Invalid Email');
                }
                else {
                    // Password Decription
                    const matchPassword = await bcrypt.compare(userpassword, user.password);

                    if (!matchPassword) {
                        res.json('Invalid Password');
                    }
                    else {

                        let payload = { subject: user._id };
                        let token = jwt.sign(payload, 'secretKey');
                        res.json({ "token": token, "is_admin": 0 });

                    }

                }

            }
        })

    }
    catch (error) {
        res.json(error);
    }

})


// Add Solved Problems --> Call two functions and put problems id in the body
var arr = [];

router.get("/solved/:userid", async (req, res) => {
    const user = await User.findById(req.params.userid);
    res.json(user);
    arr = user.SolvedProblems;
})

router.route("/solved/:userid").patch(async (req, res) => {
    try {
        arr.push(req.body._id);
        const user = await User.updateOne(
            { _id: req.params.userid },
            { $set: { SolvedProblems: arr } }
        )
        res.json(user);
    }
    catch (error) {
        res.json(error);
    }
})



module.exports = router;
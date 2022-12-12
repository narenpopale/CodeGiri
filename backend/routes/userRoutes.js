const express = require("express");
const User = require("../models/userModel");

const router = express.Router();


// Register New User
router.route('/register').post(async (req, res) => {
    let user = new User(req.body);

    try {
        const savedPost = await user.save();
        res.json(savedPost);
    }
    catch (error) {
        res.json(error);
    }
});


// Login User
router.route('/login').post((req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            }
            else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password')
            }
            else {
                res.status(200).send(user);
            }
        }
    })
})


// Add Solved Problems --> Call two functions and put problems id in the body
var arr = [];

router.get("/solved/:userid",async (req,res)=>{
    const user = await User.findById(req.params.userid);
    res.json(user);
    arr = user.SolvedProblems;
})

router.route("/solved/:userid").patch(async (req, res) => {
    try {
        arr.push(req.body._id);
        const user = await User.updateOne(
            { _id : req.params.userid},
            { $set: { SolvedProblems: arr} }
        )
        res.json(user);
    }
    catch (error) {
        res.json(error);
    }
})



module.exports = router;
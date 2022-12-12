const express = require("express");
const Contest = require("../models/contestsModel");

const router = express.Router();


// Create New Contest
router.post("/", async (req, res) => {
    console.log(req.body);

    let contest = new Contest(req.body);

    try {
        const savedPost = await contest.save();
        res.json(savedPost);
    }
    catch (error) {
        res.json(error);
    }
})


// Get All Upcoming Contests
router.route("/upcoming").get(async (req, res) => {
    try {
        const contest = await Contest.find({ status: "Upcoming" });
        res.json(contest);
    }
    catch (error) {
        res.json({ message: error });
    }
})


// Get All Present Contests
router.route("/present").get(async (req, res) => {
    try {
        const contest = await Contest.find({ status: "Present" });
        res.json(contest);
    }
    catch (error) {
        res.json({ message: error });
    }
})


// Get All Past Contests
router.route("/past").get(async (req, res) => {
    try {
        const contest = await Contest.find({ status: "Past" });
        res.json(contest);
    }
    catch (error) {
        res.json({ message: error });
    }
})


// Update Contest Status --> Call two routes for changing status
var contestStatus;

router.route("/:code").get(async (req, res) => {
    try {
        const contest = await Contest.find({ code: req.params.code });
        contestStatus = contest[0].status;
        res.json(contest);
    }
    catch (error) {
        res.json({ message: error });
    }
})


router.route("/:code").patch(async (req, res) => {
    try {
        if(contestStatus == "Upcoming"){
            const contest = await Contest.updateOne(
                { code : req.params.code},
                { $set: { status: "Present"}  }
            )
            res.json(contest);
        }
        else if(contestStatus == "Present"){
            const contest = await Contest.updateOne(
                { code : req.params.code},
                { $set: { status: "Past"}  }
            )
            res.json(contest);
        }
    }
    catch (error) {
        res.json(error);
    }
})


module.exports = router;
const router = require('express').Router();
const { Workout } = require('../models');

router.get('/workouts', async (req, res) => {
    try {
        // Finds all data in the workout collection
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ]);
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/workouts/range', async (req, res) => {
    try {
        // Finds all data in the workout collection
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.put("/workouts/:id", async (req, res) => {
    try {
        // Finds the data with the id from the parameter and changes it to the request body data 
        const workouts = await Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body }});
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.post("/workouts", async (req, res) => {
    try {
        const workouts = await Workout.create(req.body);
        res.status(500).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
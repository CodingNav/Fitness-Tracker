const router = require('express').Router();
const { Workout } = require('../models');

router.get('/api/workouts', async (req, res) => {
    try {
        // Finds all data in the workout collection
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        // Finds the data with the id from the parameter and changes it to the request body data 
        const workouts = await Workout.updateOne({id: req.params.id}, req.body);
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
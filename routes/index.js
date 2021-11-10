const router = require('express').Router();
const { Workout } = require('../models');

router.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;
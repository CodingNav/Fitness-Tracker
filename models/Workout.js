const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
            min: 0
        },
        weight: {
            type: Number,
            trim: true,
            min: 0
        },
        reps: {
            type: Number,
            trim: true,
            min: 0
        },
        sets: {
            type: Number,
            trim: true,
            min: 0
        },
        distance: {
            type: Number,
            min: 0
        }
    }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
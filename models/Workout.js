const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    weight: {
        type: Number,
        trim: true,
        min: 0
    },
    sets: {
        type: Number,
        trim: true,
        min: 0
    },
    reps: {
        type: Number,
        trim: true,
        min: 0
    },
    duration: {
        type: Number,     
        min: 0  
    },
    distance: {
        type: Number,
        min: 0
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
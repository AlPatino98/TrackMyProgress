const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  type: {
    type: String,
    required: "Enter the type of exercise"
  },
  duration: {
    type: Number,
    required: "Enter the duration"
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  distance: {
    type: Number
  },
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[exerciseSchema]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
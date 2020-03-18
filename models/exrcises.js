const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

    type: {
        type: String,
        trim: true,
        required: "Enter exrcise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exrcise"
    },
    duration: {
        type: Number,
        required: "Enter Exrsice duration"
    },
    distance: {
        type: Number
    },

    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});
const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;

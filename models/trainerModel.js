
const { number } = require('joi');
const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    trainerName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    emergencyContact: {
        type: String,
        required: true
    },
    joinedDate: {
        type: String,
        required: true
    },
    teamsWon: {
        type: Number,
        required: true
    },
    teamsLost: {
        type: Number,
        required: true
    }
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;

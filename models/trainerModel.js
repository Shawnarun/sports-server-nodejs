const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

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
        type: Date,
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
        type: emergencyContactSchema, // Embed the emergencyContact schema
        required: true
    },
    joinedDate: {
        type: Date,
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

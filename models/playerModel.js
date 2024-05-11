
const { number } = require('joi');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    playerName: {
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
     height:{
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: true
    },
    playerRanking: {
        type: Number,
        required: true
    },
    MatchRanking: {
        type: Number,
        required: true
    },
    reportInjuries: {
        type: Number,
        required: true
    },
    gameLost: {
        type: Number,
        required: true
    },
    gameMissed: {
        type: Number,
        required: true
    },
    practiceMissed: {
        type: Number,
        required: true
    },
    attended: {
        type: Number,
        required: true
    },
    duePayments: {
        type: Number,
        required: true
    },
    completePayments: {
        type: Number,
        required: true
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

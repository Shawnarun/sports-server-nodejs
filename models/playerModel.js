
const { number } = require('joi');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    dob: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    emergencyContact: {
        type: String,
        required: false
    },
     height:{
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    playerRanking: {
        type: Number,
        required: false
    },
    MatchRanking: {
        type: Number,
        required: false
    },
    reportInjuries: {
        type: Number,
        required: false
    },
    gameLost: {
        type: Number,
        required: false
    },
    gameMissed: {
        type: Number,
        required: false
    },
    practiceMissed: {
        type: Number,
        required: false
    },
    attended: {
        type: Number,
        required: false
    },
    duePayments: {
        type: Number,
        required: false
    },
    completePayments: {
        type: Number,
        required: false
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

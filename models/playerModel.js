
const { number } = require('joi');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
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
    },
    date: {
        type: Date,
        required: true
    },
    freeThrows: {
        type: Number,
        required: false,
        default: 0 
    },
    rightLayups: {
        type: Number,
        required: false,
        default: 0
    },
    leftLayups: {
        type: Number,
        required: false,
        default: 0
    },
    aroundTheWorldShots: {
        type: Number,
        required: false,
        default: 0
    },
    threePointer: {
        type: Number,
        required: false,
        default: 0
    },
    defensiveShoot: {
        type: Number,
        required: false,
        default: 0
    },
    aroundTheNeck: {
        type: Number,
        required: false,
        default: 0
    },
    aroundTheHead: {
        type: Number,
        required: false,
        default: 0
    },
    rightLowDribble: {
        type: Number,
        required: false,
        default: 0
    },
    leftLowDribble: {
        type: Number,
        required: false,
        default: 0
    },
    rightHighDribble: {
        type: Number,
        required: false,
        default: 0
    },
    leftHighDribble: {
        type: Number,
        required: false,
        default: 0
    },
    playerImage: {
        type: String,
        required: false,
        default: ""
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

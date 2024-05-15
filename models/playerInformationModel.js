const mongoose = require('mongoose');

const playerProgressSchema = new mongoose.Schema({
    playerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player', 
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    freeThrows: {
        type: Number,
        default: 0 
    },
    rightLayups: {
        type: Number,
        default: 0
    },
    leftLayups: {
        type: Number,
        default: 0
    },
    aroundTheWorldShots: {
        type: Number,
        default: 0
    },
    threePointer: {
        type: Number,
        default: 0
    },
    defensiveShoot: {
        type: Number,
        default: 0
    },
    aroundTheNeck: {
        type: Number,
        default: 0
    },
    aroundTheHead: {
        type: Number,
        default: 0
    },
    rightLowDribble: {
        type: Number,
        default: 0
    },
    leftLowDribble: {
        type: Number,
        default: 0
    },
    rightHighDribble: {
        type: Number,
        default: 0
    },
    leftHighDribble: {
        type: Number,
        default: 0
    }
});

const PlayerProgress = mongoose.model('PlayerProgress', playerProgressSchema);

module.exports = PlayerProgress;

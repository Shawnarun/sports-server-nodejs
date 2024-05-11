const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    leagueName: {
        type: String,
        required: true
    },
    teams: [{
        teamId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TeamDetails',
            required: true
        },
        teamScore: {
            type: Number,
            required: true
        },
        totalThreePoint: {
            type: Number,
            required: true
        },
        totalFreeThrows: {
            type: Number,
            required: true
        },
        playerNames: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player',
            required: true
        }]
    }]
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;

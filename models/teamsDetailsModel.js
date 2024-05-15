
    const { number } = require('joi');
    const mongoose = require('mongoose');

    const teamDetailsSchema = new mongoose.Schema({
        teamName: {
            type: String,
            required: true
        },
        position: {
            type: Number,
            required: false
        },
        teamRank: {
            type: Number,
            required: true
        },
        leagueName: {
            type: String,
            required: true
        },
        basketsIn: {
            type: Number,
            required: true
        },
        threePoint: {
            type: Number,
            required: true
        },
        freeThrows: {
            type: Number,
            required: true
        }
    });

    const TeamDetails = mongoose.model('TeamDetails', teamDetailsSchema);

    module.exports = TeamDetails;

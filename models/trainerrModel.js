const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
    myInfo: String,
    numberOfTeams: Number,
    numberOfPlayers: Number,
    allPlayerInfo: String,
    playerStats: String,
    teamInformation: String
});

const teamsDetailsSchema = new mongoose.Schema({
    teamName: String,
    position: String,
    teamRank: Number,
    league: String,
    basketsIn: Number,
    threePointers: Number
});

const trainerSchema = new mongoose.Schema({
    dashboard: dashboardSchema,
    tournaments: {
        allTournamentsDetailsTable: String
    },
    teams: {
        allTeamsDetails: [teamsDetailsSchema]
    },
    paymentHistory: {
        duePayments: String,
        completePayment: String
    },
    schedule: {
        scheduleTableCalendar: String
    }
});


const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;

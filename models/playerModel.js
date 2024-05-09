const mongoose = require('mongoose');



const dashboardSchema = new mongoose.Schema({
    myInfo: String,
    playerRanking: String,
    matchMaking: String,
    pastTeamsAndPositions: String,
    playerStats: String,
    tournamentDetails: String
});

const playerStatsSchema = new mongoose.Schema({
    reportedInjuries: String,
    gamesLost: Number,
    gamesMissed: Number,
    practicesMissed: Number,
    progressStats: String,
    progressInformation: String
});

const teamsDetailsSchema = new mongoose.Schema({
    teamName: String,
    position: String,
    teamRank: Number,
    league: String,
    basketsIn: Number,
    threePointers: Number
});

// Define the main schema for the player model
const playerSchema = new mongoose.Schema({
    dashboard: dashboardSchema,
    playerStats: playerStatsSchema,
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


const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

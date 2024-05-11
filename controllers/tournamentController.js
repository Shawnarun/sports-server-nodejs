const Tournament = require('../models/tournamentDetailsModel');
const factory = require('./handlerFactory');


async function getAllFillterTournaments(req, res, next){
    try {
        const { league, location, teamName, sortOrder } = req.query;
        
        const filter = {};
        if (league) filter.leagueName = league;
        if (location) filter.location = location;
        if (teamName) filter['teams.teamId'] = teamName;

        const sort = { teamScore: sortOrder === 'asc' ? 1 : -1 };

        const tournaments = await Tournament.find(filter)
            .sort(sort)
            .lean(); 

        res.status(200).json({
            status: 'success',
            data: tournaments
        });
    } catch (error) {
        next(error);
    }
};



exports.get = factory.getOne(Tournament);
exports.getAll = factory.getAll(Tournament);
exports.getPagination = factory.getAllPagination(Tournament);
exports.delete = factory.deleteOne(Tournament);
exports.update = factory.updateOne(Tournament);
exports.create =  factory.createOne(Tournament);
exports.getAllFillterTournaments=getAllFillterTournaments;
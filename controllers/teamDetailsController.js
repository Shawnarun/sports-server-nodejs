const TeamDetails = require('../models/teamsDetailsModel');
const factory = require('./handlerFactory');


exports.get = factory.getOne(TeamDetails);
exports.getAll = factory.getAll(TeamDetails);
exports.getPagination = factory.getAllPagination(TeamDetails);
exports.delete = factory.deleteOne(TeamDetails);
exports.update = factory.updateOne(TeamDetails);
exports.create =  factory.createOne(TeamDetails);
const PlayerInformation = require('../models/playerInformationModel');
const factory = require('./handlerFactory');


exports.get = factory.getOne(PlayerInformation);
exports.getAll = factory.getAll(PlayerInformation);
exports.getPagination = factory.getAllPagination(PlayerInformation);
exports.delete = factory.deleteOne(PlayerInformation);
exports.update = factory.updateOne(PlayerInformation);
exports.create =  factory.createOne(PlayerInformation);
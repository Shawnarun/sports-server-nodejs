const Player = require('../models/playerModel');
const factory = require('./handlerFactory');



exports.get = factory.getOne(Player);
exports.getAll = factory.getAll(Player);
exports.getPagination = factory.getAllPagination(Player);
exports.delete = factory.deleteOne(Player);
exports.update = factory.updateOne(Player);
exports.create =  factory.createOne(Player);
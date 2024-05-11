const Trainer = require('../models/trainerModel');
const factory = require('./handlerFactory');


exports.get = factory.getOne(Trainer);
exports.getAll = factory.getAll(Trainer);
exports.getPagination = factory.getAllPagination(Trainer);
exports.delete = factory.deleteOne(Trainer);
exports.update = factory.updateOne(Trainer);
exports.create =  factory.createOne(Trainer);
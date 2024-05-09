const Joi = require('joi');
const trainer = require('../models/trainerrModel');
const factory = require('./handlerFactory');





exports.create = factory.createOne(trainer);
exports.get = factory.getOne(trainer);
exports.delete = factory.deleteOne(trainer);
exports.update = factory.updateOne(trainer);
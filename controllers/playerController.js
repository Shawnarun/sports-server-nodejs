const Joi = require('joi');
const player = require('../models/playerModel');
const factory = require('./handlerFactory');






exports.create = factory.createOne(player);
exports.get= factory.getOne(player);
exports.delete= factory.deleteOne(player);
exports.update = factory.updateOne(player);
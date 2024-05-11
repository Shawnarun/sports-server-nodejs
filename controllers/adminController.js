const Admin = require('../models/adminModel');
const factory = require('./handlerFactory');


exports.get = factory.getOne(Admin);
exports.getAll = factory.getAll(Admin);
exports.getPagination = factory.getAllPagination(Admin);
exports.delete = factory.deleteOne(Admin);
exports.update = factory.updateOne(Admin);
exports.create =  factory.createOne(Admin);
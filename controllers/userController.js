const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userrModel');
const factory = require('./handlerFactory');




async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Compare passwords 
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Assuming login is successful, create JWT token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key');
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.login = login;
exports.get = factory.getOne(User);
exports.delete = factory.deleteOne(User);
exports.update = factory.updateOne(User);
exports.create =  factory.createOne(User);



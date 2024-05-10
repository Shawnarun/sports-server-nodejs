const { number } = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
     otp:{
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['PLAYER', 'RANKING', 'ADMIN'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

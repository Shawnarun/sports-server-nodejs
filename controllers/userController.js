const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userrModel');
const factory = require('./handlerFactory');
const nodemailer = require('nodemailer');





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
      res.status(200).json({ message: 'Successful', code: 200, token });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}


async function  forgotPassword(req, res){
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
      // Save OTP to user document
      user.otp = otp;
      await user.save();
  
      // Send OTP via email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'developerarun2024@gmail.com', // your email
          pass: 'lgcd iaiw jekm nmfl' // your password
        }
      });
  
      const mailOptions = {
        from: 'developerarun2024@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`
      };
  
      await transporter.sendMail(mailOptions);
  
      res.json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

  async function submitOtp(req, res) {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

async function resetPassword(req, res) {
  const { email, newPassword } = req.body;
  try {
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Update password and clear OTP
      user.password = newPassword;
      user.otp = undefined;
      await user.save();

      res.json({ message: 'Password reset successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}

exports.login = login;
exports.resetPassword = resetPassword;
exports.submitOtp = submitOtp;
exports.getAll = factory.getAll(User);
exports.get = factory.getOne(User);
exports.delete = factory.deleteOne(User);
exports.update = factory.updateOne(User);
exports.create =  factory.createOne(User);
exports.forgotPassword = forgotPassword;

const Admin = require('../models/adminModel');
const factory = require('./handlerFactory');


async function adminLogin(req, res) {
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

exports.adminLogin=adminLogin;
exports.get = factory.getOne(Admin);
exports.getAll = factory.getAll(Admin);
exports.getPagination = factory.getAllPagination(Admin);
exports.delete = factory.deleteOne(Admin);
exports.update = factory.updateOne(Admin);
exports.create =  factory.createOne(Admin);
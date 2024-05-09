const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.create);
router.get('/find-by-id/:id', userController.get);
router.delete('/delete/:id', userController.delete);
router.patch('/update/:id', userController.update);
router.post('/login', userController.login);


module.exports = router;

const express = require('express');
const adminController = require('../controllers/adminController');




const router = express.Router();


router.post('/create', adminController.create);
router.get('/find-by-id/:id', adminController.get);
router.get('/find-all', adminController.getAll);
router.get('/find-all-pagination', adminController.getPagination);
router.delete('/delete/:id', adminController.delete);
router.patch('/update/:id', adminController.update);


module.exports = router;

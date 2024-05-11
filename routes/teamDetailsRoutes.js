const express = require('express');
const teamDetailsController = require('../controllers/teamDetailsController');




const router = express.Router();


router.post('/create', teamDetailsController.create);
router.get('/find-by-id/:id', teamDetailsController.get);
router.get('/find-all', teamDetailsController.getAll);
router.get('/find-all-pagination', teamDetailsController.getPagination);
router.delete('/delete/:id', teamDetailsController.delete);
router.patch('/update/:id', teamDetailsController.update);


module.exports = router;

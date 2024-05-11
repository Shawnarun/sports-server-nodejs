const express = require('express');
const trainerController = require('../controllers/trainerController');




const router = express.Router();


router.post('/create', trainerController.create);
router.get('/find-by-id/:id', trainerController.get);
router.get('/find-all', trainerController.getAll);
router.get('/find-all-pagination', trainerController.getPagination);
router.delete('/delete/:id', trainerController.delete);
router.patch('/update/:id', trainerController.update);


module.exports = router;

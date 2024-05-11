const express = require('express');
const playerController = require('../controllers/playerController');




const router = express.Router();


router.post('/create', playerController.create);
router.get('/find-by-id/:id', playerController.get);
router.get('/find-all', playerController.getAll);
router.get('/find-all-pagination', playerController.getPagination);
router.delete('/delete/:id', playerController.delete);
router.patch('/update/:id', playerController.update);


module.exports = router;

const express = require('express');
const playerInformationController = require('../controllers/playerInformation');




const router = express.Router();


router.post('/create', playerInformationController.create);
router.get('/find-by-id/:id', playerInformationController.get);
router.get('/find-all', playerInformationController.getAll);
router.get('/find-all-pagination', playerInformationController.getPagination);
router.delete('/delete/:id', playerInformationController.delete);
router.patch('/update/:id', playerInformationController.update);



module.exports = router;

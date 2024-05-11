const express = require('express');
const tournamentController = require('../controllers/tournamentController');




const router = express.Router();


router.post('/create', tournamentController.create);
router.get('/find-by-id/:id', tournamentController.get);
router.get('/find-all', tournamentController.getAll);
router.get('/find-all-pagination', tournamentController.getPagination);
router.delete('/delete/:id', tournamentController.delete);
router.patch('/update/:id', tournamentController.update);
router.get('/find-all-fillter', tournamentController.getAllFillterTournaments);



module.exports = router;

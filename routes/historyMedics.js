const express = require('express');
const router = express.Router();
const historyMedicController = require('../controllers/historyMedicController');

router.get('/', historyMedicController.getAllHistoryMedics);
router.get('/:id', historyMedicController.getHistoryMedicById);
router.post('/', historyMedicController.createHistoryMedic);
router.put('/:id', historyMedicController.updateHistoryMedic);
router.delete('/:id', historyMedicController.deleteHistoryMedic);

module.exports = router;

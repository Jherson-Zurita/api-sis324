const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistantController');

router.get('/', assistantController.getAllAssistants);
router.get('/:id', assistantController.getAssistantById);
router.post('/', assistantController.createAssistant);
router.put('/:id', assistantController.updateAssistant);
router.delete('/:id', assistantController.deleteAssistant);

module.exports = router;

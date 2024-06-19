const AssistantService = require('../services/assistantService');

const getAllAssistants = async (req, res) => {
  try {
    const assistants = await AssistantService.getAllAssistants();
    res.json(assistants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAssistantById = async (req, res) => {
  try {
    const assistant = await AssistantService.getAssistantById(req.params.id);
    if (assistant) {
      res.json(assistant);
    } else {
      res.status(404).json({ error: 'Assistant not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createAssistant = async (req, res) => {
  try {
    const assistant = await AssistantService.createAssistant(req.body);
    res.status(201).json(assistant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAssistant = async (req, res) => {
  try {
    const assistant = await AssistantService.updateAssistant(req.params.id, req.body);
    if (assistant) {
      res.json(assistant);
    } else {
      res.status(404).json({ error: 'Assistant not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAssistant = async (req, res) => {
  try {
    const deleted = await AssistantService.deleteAssistant(req.params.id);
    if (deleted) {
      res.json({ message: 'Assistant deleted' });
    } else {
      res.status(404).json({ error: 'Assistant not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllAssistants,
  getAssistantById,
  createAssistant,
  updateAssistant,
  deleteAssistant
};

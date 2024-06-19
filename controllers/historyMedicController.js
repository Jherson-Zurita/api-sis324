const HistoryMedicService = require('../services/historyMedicService');

const getAllHistoryMedics = async (req, res) => {
  try {
    const historyMedics = await HistoryMedicService.getAllHistoryMedics();
    res.json(historyMedics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHistoryMedicById = async (req, res) => {
  try {
    const historyMedic = await HistoryMedicService.getHistoryMedicById(req.params.id);
    if (historyMedic) {
      res.json(historyMedic);
    } else {
      res.status(404).json({ error: 'HistoryMedic not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createHistoryMedic = async (req, res) => {
  try {
    const historyMedic = await HistoryMedicService.createHistoryMedic(req.body);
    res.status(201).json(historyMedic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateHistoryMedic = async (req, res) => {
  try {
    const historyMedic = await HistoryMedicService.updateHistoryMedic(req.params.id, req.body);
    if (historyMedic) {
      res.json(historyMedic);
    } else {
      res.status(404).json({ error: 'HistoryMedic not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteHistoryMedic = async (req, res) => {
  try {
    const deleted = await HistoryMedicService.deleteHistoryMedic(req.params.id);
    if (deleted) {
      res.json({ message: 'HistoryMedic deleted' });
    } else {
      res.status(404).json({ error: 'HistoryMedic not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllHistoryMedics,
  getHistoryMedicById,
  createHistoryMedic,
  updateHistoryMedic,
  deleteHistoryMedic
};

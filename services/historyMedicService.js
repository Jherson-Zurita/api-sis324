const HistoryMedic = require('../models/HistoryMedic');

const getAllHistoryMedics = async () => {
  return await HistoryMedic.findAll();
};

const getHistoryMedicById = async (id) => {
  return await HistoryMedic.findByPk(id);
};

const createHistoryMedic = async (historyMedicData) => {
  return await HistoryMedic.create(historyMedicData);
};

const updateHistoryMedic = async (id, historyMedicData) => {
  const historyMedic = await HistoryMedic.findByPk(id);
  if (historyMedic) {
    return await historyMedic.update(historyMedicData);
  }
  return null;
};

const deleteHistoryMedic = async (id) => {
  const historyMedic = await HistoryMedic.findByPk(id);
  if (historyMedic) {
    await historyMedic.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllHistoryMedics,
  getHistoryMedicById,
  createHistoryMedic,
  updateHistoryMedic,
  deleteHistoryMedic
};

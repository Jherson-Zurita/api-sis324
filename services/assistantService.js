const Assistant = require('../models/Assistant');

const getAllAssistants = async () => {
  return await Assistant.findAll();
};

const getAssistantById = async (id) => {
  return await Assistant.findByPk(id);
};

const createAssistant = async (assistantData) => {
  return await Assistant.create(assistantData);
};

const updateAssistant = async (id, assistantData) => {
  const assistant = await Assistant.findByPk(id);
  if (assistant) {
    return await assistant.update(assistantData);
  }
  return null;
};

const deleteAssistant = async (id) => {
  const assistant = await Assistant.findByPk(id);
  if (assistant) {
    await assistant.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllAssistants,
  getAssistantById,
  createAssistant,
  updateAssistant,
  deleteAssistant
};

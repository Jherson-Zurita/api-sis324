const Patient = require('../models/Patient');

const getAllPatients = async () => {
  return await Patient.findAll();
};

const getPatientById = async (id) => {
  return await Patient.findByPk(id);
};

const createPatient = async (patientData) => {
  return await Patient.create(patientData);
};

const updatePatient = async (id, patientData) => {
  const patient = await Patient.findByPk(id);
  if (patient) {
    return await patient.update(patientData);
  }
  return null;
};

const deletePatient = async (id) => {
  const patient = await Patient.findByPk(id);
  if (patient) {
    await patient.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient
};

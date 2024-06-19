const Doctor = require('../models/Doctor');

const getAllDoctors = async () => {
  return await Doctor.findAll();
};

const getDoctorById = async (id) => {
  return await Doctor.findByPk(id);
};

const createDoctor = async (doctorData) => {
  return await Doctor.create(doctorData);
};

const updateDoctor = async (id, doctorData) => {
  const doctor = await Doctor.findByPk(id);
  if (doctor) {
    return await doctor.update(doctorData);
  }
  return null;
};

const deleteDoctor = async (id) => {
  const doctor = await Doctor.findByPk(id);
  if (doctor) {
    await doctor.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
};

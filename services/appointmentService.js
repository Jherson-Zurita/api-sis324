const Appointment = require('../models/Appointment');

const getAllAppointments = async () => {
  return await Appointment.findAll();
};

const getAppointmentById = async (id) => {
  return await Appointment.findByPk(id);
};

const createAppointment = async (appointmentData) => {
  return await Appointment.create(appointmentData);
};

const updateAppointment = async (id, appointmentData) => {
  const appointment = await Appointment.findByPk(id);
  if (appointment) {
    return await appointment.update(appointmentData);
  }
  return null;
};

const deleteAppointment = async (id) => {
  const appointment = await Appointment.findByPk(id);
  if (appointment) {
    await appointment.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment
};

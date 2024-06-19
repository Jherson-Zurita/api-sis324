const AppointmentService = require('../services/appointmentService');

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await AppointmentService.getAppointmentById(req.params.id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentService.createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentService.updateAppointment(req.params.id, req.body);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const deleted = await AppointmentService.deleteAppointment(req.params.id);
    if (deleted) {
      res.json({ message: 'Appointment deleted' });
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment
};

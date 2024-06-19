const DoctorService = require('../services/doctorService');

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await DoctorService.getDoctorById(req.params.id);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createDoctor = async (req, res) => {
  try {
    const doctor = await DoctorService.createDoctor(req.body);
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const doctor = await DoctorService.updateDoctor(req.params.id, req.body);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const deleted = await DoctorService.deleteDoctor(req.params.id);
    if (deleted) {
      res.json({ message: 'Doctor deleted' });
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
};

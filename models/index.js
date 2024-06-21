const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define('Admin', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  email: DataTypes.STRING,
  telefono: DataTypes.STRING
});

const Doctor = sequelize.define('Doctor', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  especialidad: DataTypes.STRING,
  telefono: DataTypes.STRING,
  email: DataTypes.STRING
});

const Patient = sequelize.define('Patient', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  fechanacimiento: DataTypes.DATE,
  direccion: DataTypes.STRING,
  telefono: DataTypes.STRING,
  email: DataTypes.STRING,
  idHistoryMedic: DataTypes.INTEGER
});

const Assistant = sequelize.define('Assistant', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  email: DataTypes.STRING,
  telefono: DataTypes.STRING
});

const User = sequelize.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
  roleId: DataTypes.INTEGER
});

const Appointment = sequelize.define('Appointment', {
  date: DataTypes.DATE,
  time: DataTypes.TIME,
  clientId: DataTypes.INTEGER,
  doctorId: DataTypes.INTEGER,
  status: DataTypes.STRING,
  medicalInfo: DataTypes.STRING
});

module.exports = { Admin, Doctor, Patient, Assistant, User, Appointment };

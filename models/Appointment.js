const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Appointment extends Model {}

Appointment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Patients',
      key: 'id'
    }
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Doctors',
      key: 'id'
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  medicalInfo: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'Appointment',
  tableName: 'appointments'
});

module.exports = Appointment;

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class HistoryMedic extends Model {}

HistoryMedic.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idPatient: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  notas: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'HistoryMedic',
  tableName: 'history_medic'
});

module.exports = HistoryMedic;

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Clinic = sequelize.define('Clinic', {
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  startTime: {
    allowNull: true,
    type: DataTypes.TIME,
  },
  endTime: {
    allowNull: true,
    type: DataTypes.TIME,
  },
  contact: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  daysOfWeek: {
    type: DataTypes.INTEGER,
  },
});
Clinic.belongsTo(sequelize.models.Doctor);
module.exports = Clinic;

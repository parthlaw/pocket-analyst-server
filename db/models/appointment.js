const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Doctor = require('./doctor');
const User = require('./user');
const Appointment = sequelize.define('Appointment', {
  comment: {
    type: DataTypes.STRING,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
});
Appointment.belongsTo(Doctor);
Appointment.belongsTo(User);
module.exports = Appointment;

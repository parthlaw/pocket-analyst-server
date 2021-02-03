const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Clinic = require('./clinic');
const Doctor = require('./doctor');
const User = require('./user');
const Report = sequelize.define('Report', {
  content: {
    type: DataTypes.STRING,
  },
});
Report.belongsTo(Clinic);
Report.belongsTo(Doctor);
Report.belongsTo(User);
module.exports = Report;

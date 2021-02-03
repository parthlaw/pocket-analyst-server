const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Doctor = sequelize.define('Doctor', {
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
module.exports = Doctor;

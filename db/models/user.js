const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('User', {
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  dob: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  contact: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  height: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  weight: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  bloodGroup: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
module.exports = User;

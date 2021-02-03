const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Clinic = require('./clinic');
const Doctor = require('./doctor');
const User = require('./user');

const Address = sequelize.define('Address', {
  street: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  locality: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pin: { allowNull: false, type: DataTypes.STRING },
});
Address.hasOne(Doctor);
Address.hasOne(Clinic);
Address.hasOne(User);
module.exports = Address;

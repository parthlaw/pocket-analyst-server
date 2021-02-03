const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Doctor = require('./doctor');
const DocLogin = sequelize.define('UserLogin', {
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});
DocLogin.belongsTo(Doctor);
module.exports = DocLogin;

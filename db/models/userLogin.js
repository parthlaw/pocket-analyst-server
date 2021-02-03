const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');
const UserLogin = sequelize.define('UserLogin', {
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});
UserLogin.belongsTo(User);
module.exports = UserLogin;

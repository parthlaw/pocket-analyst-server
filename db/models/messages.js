const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Doctor = require('./doctor');
const User = require('./user');
const Messages = sequelize.define('Message', {
  sender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  reciepent: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  timestamp: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
Messages.belongsTo(Doctor);
Messages.belongsTo(User);
module.exports = Messages;

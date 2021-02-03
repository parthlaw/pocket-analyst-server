const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize(
  'postgres://aibcfynw:mlNcchNzaDIvyfyHhAMGkeqS-2qZvvvH@suleiman.db.elephantsql.com:5432/aibcfynw'
);
module.exports = sequelize;

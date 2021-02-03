const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const sequelize = require('./db/db');
const schema = require('./graphql/schema');
const cors = require('cors');
const app = express();
const models = require('./db/models');
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: () => {
      return { user: 'Test' };
    },
  })
);
async function Connection() {
  console.log('testing db connection');
  try {
    await sequelize.authenticate();
    console.log('Connection Established');
  } catch (err) {
    console.log('Connection Failed');
    console.log(err);
  }
}
async function dbSync() {
  console.log('Syncronising DB');
  try {
    await models.sequelize.sync();
    console.log('Sync Successfull');
  } catch (err) {
    console.log('Sync failed');
    console.log(err);
  }
}
async function init() {
  await Connection();
  await dbSync();
}
app.listen(5000, () => {
  console.log('Server Started');
});

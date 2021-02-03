const graphql = require('graphql');
const user = require('./user');
const RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: {
      type: user,
      resolve(parent, args) {
        return { id: 22 };
      },
    },
  },
});
const Mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: user,
      args: {},
    },
  },
});
module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});

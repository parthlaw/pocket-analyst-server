const graphql = require('graphql');
const AddressType = require('./address');
const { GraphQLDateTime } = require('graphql-iso-date');
const User = new graphql.GraphQLObjectType({
  name: 'user',
  fields: {
    id: { type: graphql.GraphQLInt },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    dob: { type: GraphQLDateTime },
    contact: { type: graphql.GraphQLString },
    height: { type: graphql.GraphQLInt },
    weight: { type: graphql.GraphQLInt },
    bloodGroup: { type: graphql.GraphQLString },
    gender: { type: graphql.GraphQLString },
    address: { type: AddressType },
  },
});
const NoUser = new graphql.GraphQLObjectType({
  name: 'NoUser',
  fields: {
    message: {
      type: graphql.GraphQLString,
      // resolve(parent, args, context) {
      //   context();
      //   return 'lol';
      // },
    },
  },
});
const UserType = new graphql.GraphQLUnionType({
  name: 'UserType',
  types: [User, NoUser],
  resolveType(value) {
    if (value.message) {
      return NoUser;
    } else {
      return User;
    }
  },
});
module.exports = UserType;

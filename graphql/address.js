const graphql = require('graphql');

const address = new graphql.GraphQLObjectType({
  name: 'Address',
  fields: {
    id: { type: graphql.GraphQLInt },
    street: {
      type: graphql.GraphQLString,
    },
    locality: {
      type: graphql.GraphQLString,
    },
    city: {
      type: graphql.GraphQLString,
    },
    state: {
      type: graphql.GraphQLString,
    },
    pin: {
      type: graphql.GraphQLString,
    },
  },
});
const NoAddress = new graphql.GraphQLObjectType({
  name: 'NoAddress',
  fields: {
    request: { type: graphql.GraphQLString },
    message: { type: graphql.GraphQLString },
  },
});
const AddressType = new graphql.GraphQLObjectType({
  name: 'AddressType',
  fields: {
    _typename: { type: graphql.GraphQLString },
    address: { type: address },
    NoAddress: { type: NoAddress },
  },
});
module.exports = AddressType;

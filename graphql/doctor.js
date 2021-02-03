import graphql from 'graphql';
import AddressType from './address';
const Doctor = new graphql.GraphQLObjectType({
  name: 'doctor',
  fields: {
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    address: { type: AddressType },
  },
});
const NotFound = new graphql.GraphQLObjectType({
  name: 'NotFound',
  fields: {
    message: { type: graphql.GraphQLString },
  },
});
const DoctorType = new graphql.GraphQLObjectType({
  name: 'DoctorType',
  fields: {
    _typename: { type: graphql.GraphQLString },
    doctor: { type: Doctor },
    NoFound: { type: NotFound },
  },
});
export default DoctorType;

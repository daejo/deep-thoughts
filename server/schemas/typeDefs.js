// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        hellowWorld: String
    }`;

// export the typeDefs
module.exports = typeDefs;
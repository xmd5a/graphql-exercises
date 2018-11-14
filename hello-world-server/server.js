const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');

const port = 9000;

const typeDefs = `
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello World!'
  }
};

const schema = makeExecutableSchema({typeDefs, resolvers});

const app = express();
app.use(cors(), bodyParser.json());
app.use('/graphql', graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(port, () => console.log(`server running on port ${port}`));

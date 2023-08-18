const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const cors = require("cors")
require('dotenv').config({path: '../.env'});


const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Set up Apollo Server and middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
    await server.start();
  
    // Apply Apollo Server middleware to Express app
    server.applyMiddleware({ app });
  
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port 5000`);
    });
  }

  mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful")
    return startServer()
  })
  .catch((error) => {
    console.log(error)
  })

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://mmdanish:o4YoyTbXT3ltC9Gi@democluster.qikjk8t.mongodb.net/contacts?retryWrites=true&w=majority";
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connect");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server running at port ${res.url}`);
  });

require("dotenv").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "../graphql/";
import { models } from "./config/db/";

// const { mongoURI: db } = process.env;
let path = require('path');
let express = require('express');
const pubsub = new PubSub();
let app = express();

const options = {
  port: process.env.PORT || "5000",
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../STN/public/index.html'));
});
const context = {
  models,
  pubsub
};

// Connect to MongoDB with Mongoose.

mongoose
  .connect(
      "mongodb://sajee:ukistu10@ds123346.mlab.com:23346/sharack",
     

      // db,
    // {
    //   useCreateIndex: true,
    //   useNewUrlParser: true
    // }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const server = new GraphQLServer({
  schema,
  context
});

server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

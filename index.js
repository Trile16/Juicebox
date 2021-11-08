// inside index.js
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const { PORT = 3000 } = process.env;
const server = express();

server.use(express.json());

server.use(morgan("dev"));
server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require("./api");
server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});

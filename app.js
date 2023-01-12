const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactionsController");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/transactions", transactionsController);

//routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Budget Bank!");
});

//export
module.exports = app;

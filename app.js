const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactionsController");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
app.use("/transactions", transactionsController);

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

//export
module.exports = app;

const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

//get all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//get single transaction
transactions.get("/:index", (req, res) => {
  const { index } = req.params.index;
  if (transactionsArray[index]) res.json(transactionsArray[index]);
  else res.status(404).redirect("/*");
});

module.exports = transactions;

const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

//get all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//get single transaction
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) res.json(transactionsArray[index]);
  else res.status(404).send("No such item exists").redirect("/*");
});
//post
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray.at(-1));
});

//delete
transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    const deleted = transactionsArray.splice(index, 1);
    res.status(200).json(deleted);
  } else
    res.status(404).send("Cannot delete a nonexistent item").redirect("/*");
});

//put
transactions.put("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    transactionsArray[index] = req.body;
    res.status(200).json(transactionsArray[index]);
  } else {
    res.status(404).send("Cannot update item").redirect("/*");
  }
});

//export
module.exports = transactions;

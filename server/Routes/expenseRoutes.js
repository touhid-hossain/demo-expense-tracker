const express = require("express");
const expenseRouter = express.Router();
expenseRouter.get("/weekly-expense", (req, res) => {
  res.json({ message: "Succesfull" });
  res.end();
});

module.exports = expenseRouter;

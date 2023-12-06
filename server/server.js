const express = require("express");
const app = express();
const expenseRouter = require("./Routes/expenseRoutes");
const port = 5000;

app.use("/api/v1/expense", expenseRouter);

// Server Listening
app.listen(port, () => {
  console.log("Running Successfull");
});

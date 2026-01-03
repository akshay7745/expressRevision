const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("In the middleware");

  next();
});

app.use((req, res) => {
  console.log("In the 2nd middleware...");
  res.send({ data: "Hello I am coming as a json response..." });
});

app.listen(3000, () => {
  console.log("Server is up and running...");
});

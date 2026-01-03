const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/shop", (req, res) => {
  res.status(404).send("<h2>Page not found...</h2>");
});
app.listen(3000, () => {
  console.log("Server is up and running...");
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(`<form method="post" action="/products" >
            <input type="text" placeholder="Enter product name" name="title"/>
    <input type="text" name="size" placeholder="Provide product size"/>
    <button type="submit">Submit</button>
    </form>`);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});
app.listen(3000, () => {
  console.log("Server is up and running...");
});

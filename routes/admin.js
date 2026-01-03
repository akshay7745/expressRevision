const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`<form method="post" action="/admin/products" >
            <input type="text" placeholder="Enter product name" name="title"/>
    <input type="text" name="size" placeholder="Provide product size"/>
    <button type="submit">Submit</button>
    </form>`);
});

router.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});

module.exports = router;

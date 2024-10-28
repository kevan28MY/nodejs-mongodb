const express = require("express");
const mongoose = require("mongoose");
const DB_URL = require("./config.js");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from NodeJS API");
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("server is running in port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });

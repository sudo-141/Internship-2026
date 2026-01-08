const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mern_internship")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Product = mongoose.model("Product", ProductSchema);

app.post("/api/products", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.put("/api/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
});

app.delete("/api/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

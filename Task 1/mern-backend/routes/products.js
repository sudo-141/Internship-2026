const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      name,
      price,
      description
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);

  } catch (err) {
    res.status(500).json({ message: "Failed to create product" });
  }
});


router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: "Failed to update product" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});

module.exports = router;

import Product from "../models/productModel.js";
import mongoose from "mongoose";

// For the handlers of our routes
const getProducts = async (req, res) => {
  // Async because of await
  try {
    const products = await Product.find(); // find() takes time, therefore await
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

export { getProducts, getProductBySlug, getProductById };

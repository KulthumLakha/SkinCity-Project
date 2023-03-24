import Product from "../models/productModel.js";
import mongoose from "mongoose";

// For the handlers of our routes
export const getProducts = async (req, res) => {
  // Async because of await
  try {
    const products = await Product.find(); // find() takes time, therefore await
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

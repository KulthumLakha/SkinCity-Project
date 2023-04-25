import express from "express";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import productData from "../productsData.js";
import userData from "../usersData.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(productData);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(userData);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;

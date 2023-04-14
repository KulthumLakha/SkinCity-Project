import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import mongoose from "mongoose";

const placeOrder = async (req, res) => {
  res.json({ message: "Order placed" });
  console.log(req.body);
};

// TO-DO:
// payOrder()
// getOrderHistory()

export { placeOrder };

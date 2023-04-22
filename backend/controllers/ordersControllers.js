import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import mongoose from "mongoose";

const placeOrder = async (req, res) => {
  let calcItemsPrice = 0;
  let calcTotalPrice = 0;
  let product;
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;
  const userID = req.user.id;

  if (
    !orderItems ||
    !shippingAddress ||
    !paymentMethod ||
    !itemsPrice ||
    !shippingPrice ||
    !taxPrice ||
    !totalPrice
  ) {
    res.status(400).json({ message: "Order fields are incomplete." });
    console.log("ERROR: Order fields are incomplete.");
    return;
  }

  if (orderItems.length === 0) {
    res.status(400).json({ message: "Order cannot be empty." });
    console.log("ERROR: Order cannot be empty.");
    return;
  }

  // Validate user exists
  const user = await User.findById(userID);
  if (!user) {
    res.status(400).json({ message: "User not found." });
    console.log("ERROR: User not found.");
    return;
  }

  await new Promise((resolve, reject) => {
    orderItems.forEach(async (orderItem, index, array) => {
      product = await Product.findById(orderItem.productID);
      // Validate product exists
      if (!product) {
        res.status(400).json({ message: "Product not found." });
        reject("Product not found.");
      }

      // Validate quantity satisfies
      if (product && orderItem.quantity > product.inStockQuantity) {
        res.status(400).json({ message: "Out of stock." });
        reject("Out of stock.");
      }

      // Calculate items price based on the price in the database instead of the price passed from client
      if (product) {
        calcItemsPrice += orderItem.quantity * product.price;
      }

      if (index === array.length - 1) {
        resolve(calcItemsPrice);
      }
    });
  })
    .then((calcItemsPrice) => {
      // Validate items price
      if (calcItemsPrice !== itemsPrice) {
        res.status(400).json({ message: "Items price invalid." });
        return Promise.reject("Items price invalid.");
      }
      calcTotalPrice = calcItemsPrice + 3.99 + 4.99; // Adding tax and shipping
      // Validate total price
      if (calcTotalPrice !== totalPrice) {
        res.status(400).json({ message: "Total price invalid." });
        return Promise.reject("Total price invalid.");
      }
      return;
    })
    .then(async () => {
      // Add order to the database
      const newOrder = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        userID,
      });
      const order = await newOrder.save();
      console.log(orderItems);
      res.json({ message: "Order received." });
    })
    .catch((e) => {
      // Catching error
      console.log("ERROR: " + e);
    });
};

// TO-DO:
// payOrder()
// getOrderHistory()

export { placeOrder };

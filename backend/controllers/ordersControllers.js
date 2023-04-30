import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import mongoose from "mongoose";

const placeOrder = async (req, res) => {
  let calcItemsPrice = 0;
  let calcTotalPrice = 0;
  let calcTax = 0;
  let calcShipping = 0;
  let productObj;
  const roundNum = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  let {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;
  const user = req.user.id;

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
  const userObj = await User.findById(user);
  if (!userObj) {
    res.status(400).json({ message: "User not found." });
    console.log("ERROR: User not found.");
    return;
  }

  await new Promise((resolve, reject) => {
    orderItems.forEach(async (orderItem, index, array) => {
      productObj = await Product.findById(orderItem._id);
      // Validate product exists
      if (!productObj) {
        res.status(400).json({ message: "Product not found." });
        reject("Product not found." + orderItem._id);
      }

      // Validate quantity satisfies
      if (productObj && orderItem.quantity > productObj.inStockQuantity) {
        res.status(400).json({ message: "Out of stock." });
        reject("Out of stock.");
      }

      // Calculate items price based on the price in the database instead of the price passed from client
      if (productObj) {
        calcItemsPrice += orderItem.quantity * productObj.price;
      }

      if (index === array.length - 1) {
        resolve(roundNum(calcItemsPrice));
      }
    });
  })
    .then((calcItemsPrice) => {
      // Validate items price
      if (calcItemsPrice !== itemsPrice) {
        res.status(400).json({ message: "Items price invalid." });
        return Promise.reject("Items price invalid.");
      }

      // Calculate tax
      calcTax = roundNum(0.0825 * calcItemsPrice);

      // Calculate shipping
      calcShipping = calcItemsPrice > 100 ? roundNum(0) : roundNum(10);

      // Validate total price
      calcTotalPrice = calcItemsPrice + calcTax + calcShipping; // Adding tax and shipping
      if (calcTotalPrice !== totalPrice) {
        res.status(400).json({ message: "Total price invalid." });
        return Promise.reject("Total price invalid.");
      }
      return;
    })
    .then(async () => {
      // Add order to the database
      orderItems = orderItems.map((x) => ({ ...x, product: x._id }));
      const newOrder = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        user,
      });
      const order = await newOrder.save();
      console.log(orderItems);
      res.json({ message: "Order received.", order });
    })
    .catch((e) => {
      // Catching error
      console.log("ERROR: " + e);
    });
  // console.log(req.body);
};

const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
};

// TO-DO:
// payOrder()
// getOrderHistory()

export { placeOrder, getOrder };

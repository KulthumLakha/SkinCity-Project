import dotenv from "dotenv";
import base64_encode from "./base64.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import Product from "./models/productModel.js";
import productsData from "./productsData.js";
import productsRoutes from "./routes/productsRoutes.js";
import User from "./models/userModel.js";
import usersData from "./usersData.js";
import usersRoutes from "./routes/usersRoutes.js";

const CLIENT_URL = "http://127.0.0.1:3000";

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

mongoose
  // .connect(
  //   "mongodb://" +
  //     process.env.USERNAME +
  //     ":" +
  //     process.env.PASSWORD +
  //     "@ac-5o6366k-shard-00-00.chuev7o.mongodb.net:27017,ac-5o6366k-shard-00-01.chuev7o.mongodb.net:27017,ac-5o6366k-shard-00-02.chuev7o.mongodb.net:27017/test?ssl=true&replicaSet=atlas-i6k70m-shard-0&authSource=admin&retryWrites=true&w=majority",
  //   { useNewUrlParser: true }
  // )
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true }) // MongoDB Local Machine
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port: ${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas");
    console.error(error);
  });

// let newProduct;
// productsData.forEach((product) => {
//   newProduct = new Product(product);
//   newProduct.save();
// });

// let newUser;
// usersData.forEach((user) => {
//   newUser = new User(user);
//   newUser.save();
// });

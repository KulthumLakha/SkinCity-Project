import dotenv from "dotenv";
import Product from "./models/productModel.js";
import base64_encode from "./base64.js";
import productsRoutes from "./routes/productsRoutes.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const CLIENT_URL = "http://127.0.0.1:3000";

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/products", productsRoutes);

mongoose
  .connect(
    "mongodb://" +
      process.env.USERNAME +
      ":" +
      process.env.PASSWORD +
      "@ac-5o6366k-shard-00-00.chuev7o.mongodb.net:27017,ac-5o6366k-shard-00-01.chuev7o.mongodb.net:27017,ac-5o6366k-shard-00-02.chuev7o.mongodb.net:27017/test?ssl=true&replicaSet=atlas-i6k70m-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
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

// const newProduct = new Product({
//   name: "Rose Toner",
//   slug: "rose-toner",
//   price: 15.5,
//   inStockQuantity: 100,
//   description:
//     "Rose water toner is a gentle and soothing skincare product that can help balance and hydrate the skin. Made from the distilled petals of the Rosa damascena plant, rose water is known for its anti-inflammatory and antioxidant properties. This toner is alcohol-free, making it suitable for even the most sensitive skin types.",
//   image: base64_encode("./assets/rose-toner.jpg"),
// });

// newProduct.save();

import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  inStockQuantity: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Base64
  images: [String], // Additional pictures
});

const Product = mongoose.model("Product", productSchema);

export default Product;

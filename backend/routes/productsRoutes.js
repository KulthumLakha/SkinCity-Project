import express from "express";
import {
  getProducts,
  getProductBySlug,
  getProductById,
} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/slug/:slug", getProductBySlug);
router.get("/:id", getProductById);

export default router;

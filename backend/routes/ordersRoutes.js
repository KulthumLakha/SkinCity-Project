import express from "express";
import { placeOrder, getOrder } from "../controllers/ordersControllers.js";
import { isAuth } from "../utils.js";

const router = express.Router();

router.post("/", isAuth, placeOrder);
router.get("/:id", isAuth, getOrder);
// TO-DO:
// payOrder()
// getOrderHistory()

export default router;

import express from 'express';
import { placeOrder } from '../controllers/ordersControllers.js';
import { isAuth } from '../utils.js';

const router = express.Router();

router.post('/', isAuth, placeOrder);
// TO-DO:
// payOrder()
// getOrderHistory()

export default router;

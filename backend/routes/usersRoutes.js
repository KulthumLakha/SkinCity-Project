import express from "express";
import {
  register,
  login,
  getProfile,
} from "../controllers/usersControllers.js";
import { isAuth } from "../utils.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.get("/profile", isAuth, getProfile); // TO-DO: Implement authentication/protection function; may be replaced with /:id

export default router;

import User from "../models/userModel.js";
import mongoose from "mongoose";

// For the handlers of our routes
// Sign-up or register
// Public
const register = async (req, res) => {
  res.json({ message: "New user registered" });
};

// Log-in or authenticate
// Public
const login = async (req, res) => {
  res.json({ message: "User logged in" });
};

// Retrieve user information and order history
// Private
const getProfile = async (req, res) => {
  res.json({ message: "User information" });
};

export { register, login, getProfile };

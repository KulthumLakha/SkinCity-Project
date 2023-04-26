import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// For the handlers of our routes
// Sign-up or register
// Public
const register = async (req, res) => {
  // Check name, email, and password are not empty.
  const { name, email, password } = req.body;

  // Sanitize name, email, and password.
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please fill all fields." });
    throw new Error("Please fill all fields.");
  }

  // Check if email has already been registered.
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "User already exists." });
    throw new Error("User already exists.");
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create new user.
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
    throw new Error("Invalid user data");
  }

  //   res.json({ message: "New user registered" });
};

// Log-in or authenticate
// Public
const login = async (req, res) => {
  // Check email and password are not empty.
  const { email, password } = req.body;

  // Sanitize email and password.
  if (!email || !password) {
    res.status(400).json({ message: "Please fill all fields." });
    throw new Error("Please fill all fields.");
  }

  // Check if user exists.
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    // Call SendMail(user.email) function
    // Comment out the following
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid credentials." });
    throw new Error("Invalid credentials.");
  }

  //   res.json({ message: "User logged in" });
};

// Retrieve user information and order history
// Private
const getProfile = async (req, res) => {
  res.json({ user: req.user, message: "User information" });
};

// Verify user
const verify = async (req, res) => {
  // Move from app.js
  // Generate token
  res.json({
    message: "Email verified successfully",
    token: generateToken(user._id),
  });
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const sendMail = async (email) => {};

export { register, login, getProfile, verify };

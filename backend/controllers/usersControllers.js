import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
// import mongoose from "mongoose";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";


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
    sendMail(user)
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
  const token = req.params.token;
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
		if (err) {
			console.log(err);
			res.send("Email verification failed,possibly the link is invalid or expired");
		}
		else {
			res.redirect("http://localhost:3000/")
		}
	});
  // Generate token
  // res.json({
  //   message: "Email verified successfully",
  //   token: generateToken(user._id),
  // });
};

// Generate JWT
const generateToken = (id, validity='30d') => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: validity
  });
};

const sendMail = async (user) => {
  const {email, id} = user 
  const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'skincityproject5600@gmail.com', 
		pass: 'utlmvxnasbthismx'
	}
});

const token = generateToken(id, '10m')

const mailConfigurations = {

	// It should be a string of sender/server email
	from: 'skincityproject5600@gmail.com',

	to: email,

	// Subject of Email
	subject: 'Email Verification',
	
	// This would be the text of email body
	text: `Hi! There, You have recently visited
		our website and entered your email.
		Please follow the given link to verify your email
		http://localhost:3001/api/users/verify/${token}
		Thanks`
	
};

transporter.sendMail(mailConfigurations, function(error, info){
	if (error) throw Error(error);
	console.log('Email Sent Successfully');
	console.log(info);
});
};

export { register, login, getProfile, verify };

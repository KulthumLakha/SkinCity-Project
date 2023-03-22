require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const CLIENT_URL = "http://127.0.0.1:3000";

const app = express();

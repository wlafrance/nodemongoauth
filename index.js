const express = require("express");
const app = express("");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Routes
const authRoute = require("./routes/auth");

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db!")
);

// Middlewares
app.use(express.json());

// Router Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server is up and running"));

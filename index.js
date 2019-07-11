const express = require("express");

const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Routes
const authRoute = require("./routes/auth");

const app = express("");
dotenv.config();

// Connect to DB
const dbConn = "mongodb://deved:deved123@ds049641.mlab.com:49641/vue_express";

//const dbConn =
// "mongodb+srv://deved:deved11@cluster0-opihy.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbConn, { useNewUrlParser: true }, () =>
  console.log("connected to db!")
);

//middleware

app.use(express.json());

//routes

app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server up and running"));

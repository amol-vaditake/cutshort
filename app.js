const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
require("./db");


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:1234",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());



module.exports = app;
const express = require("express");
const router = require("./src/routes/api");
const app = express();

// Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
//const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//ENV
const dotENV = require("dotenv");
dotENV.config();

// Apply security middleware(call)
app.use(helmet());
//app.use(xss());
app.use(hpp());
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "100mb" }));

//Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3000,
});
app.use(limiter);

//Database

// Default route
app.get("/", (req, res) => {
  res.send("API is running successfully ");
});

// Application routes
app.use("/api/v1", router);

//Undefined Route
app.use((req, res) => {
  res.status(404).send("No Router Found.");
});

module.exports = app;

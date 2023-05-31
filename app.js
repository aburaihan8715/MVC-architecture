const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.routes");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// users route
app.use(userRouter);

// home route
app.get("/", (req, res) => {
  res.send("Hello from home route!");
});

// not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Sorry! route not found!",
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(502).json({
    message: "Something went wrong!",
  });
});

module.exports = app;

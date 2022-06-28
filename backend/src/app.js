const express = require("express");
const cors = require("cors");
const signInRouter = require("./routes/signIn.route");

const errorHandler = require("./middleware/error.middleware.js");

// Create new express application instance
const app = express();

// Parse request body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/signin", signInRouter);
app.use(errorHandler);

module.exports = app;

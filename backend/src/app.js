const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.route")

const errorHandler = require("./middleware/error.middleware.js");
const userValidate = require("./middleware/signIn.middleware.js");


// Create new express application instance
const app = express();

// Parse request body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/signup",userValidate, userRouter );
app.use(errorHandler);

module.exports = app;
const express = require("express"); //our server
const mongoose = require("mongoose"); //does the same as above but supports models
const logger = require("morgan"); //nice to have - hooks into our routes and console.logs all the requests/responses

//this doesn't hurt to have 
require('dotenv').config();

//this we DO need, but, we need to be sure there is an index.js in our models folder
var db = require("./models");

const app = express();
const port = process.env.PORT || 5000;

app.use(logger("dev")); //using morgan library to log requests 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", { useNewUrlParser: true });

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
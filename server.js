const express = require("express"); //our server
const logger = require("morgan"); //nice to have - hooks into our routes and console.logs all the requests/responses
const mongoose = require("mongoose"); //does the same as above but supports models

//this doesn't hurt to have 
require('dotenv').config();

const port = process.env.PORT || 5000;

//this we DO need, but, we need to be sure there is an index.js in our models folder
var db = require("./models");
const app = express();

app.use(logger("dev")); //using morgan library to log requests

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", { useNewUrlParser: true });

// If deployed, use the deployed database.  Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
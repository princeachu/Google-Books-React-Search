// Add dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Declare app as express
const app = express();

// Define Port - process.env for Heroku, 3000 for localhost
const PORT = process.env.PORT || 3000;

// Define middleware to allow data to be passed from front-end client to backend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set-up static assets ???
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes for both API and HTML
app.use(routes);

// Connect to Mongo DB - googleBookSearch is the database name
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBookSearch"
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

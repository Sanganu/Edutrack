const express = require("express");
const
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
//var studentData = requite("./data/friends.js");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;

let yesdb = false;
let yesapp = false;

if (process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI);
      console.log("mongoose connected");

}
else {
      mongoose.connect("mongodb://localhost/edutrack");
         console.log(" Server - mongoose connected");
}


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  yesapp = true;
});

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
//var studentData = requite("./data/friends.js");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set up promises with mongoose
mongoose.Promise = Promise;

let yesdb = false;
let yesapp = false;

if(process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI, {
        useMongoClient: true
      });
}
else {
      mongoose.connect("mongodb://localhost/gikshasolution", {
        useMongoClient: true
      });
      console.log("mongoose connected");
}

let dbconnect = mongoose.connection;
dbconnect.on('error',console.error.bind(console,'connection error:'));
dbconnect.once('open',function() {
     console.log('Connction open');
     yesdb = true;
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  yesapp = true;
});

//Load data
if ( yesapp && yesdb)
{
  createrecords();

}

function createrecords()
{
  console.log("Create Records");


}

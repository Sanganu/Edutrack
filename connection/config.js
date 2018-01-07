const mongoose = require("mongoose");
// Set up promises with mongoose
mongoose.Promise = global.Promise;

let yesdb = false;
let yesapp = false;

if(process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI, {
        useMongoClient: true
      });
}
else {
      mongoose.connect("mongodb://localhost/gikshasolution2");
         console.log("Config - mongoose connected");
}

let dbconnect = mongoose.connection;
dbconnect.on('error',console.error.bind(console,'Config - connection error:'));
dbconnect.once('open',function() {
     console.log('Config - Connection open');
     yesdb = true;
});

module.exports = dbconnect;

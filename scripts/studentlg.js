const mongoose = require("mongoose");
const db= = require("../models");
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gikshasolution",
  {
    useMongoClient: true
  }
);
const StudentSeed =
[
  {
    classid: "100",
    studentid: "10001",
    pswd: "Alkeys",
    firstname: "Alisa",
    lastname: "Keys"
  },
  {
    classid: "100",
    studentid: "10002",
    pswd: "Memonsoon",
    firstname: "Merriam",
    lastname: "Monsoon"
  },
  {
    classid: "100",
    studentid: "10003",
    pswd: "Wishakes",
    firstname: "William",
    lastname: "Shakes"
  },
  {
    classid: "100",
    studentid: "10004",
    pswd: "JoCandy",
    firstname: "John",
    lastname: "Candy"
  },
  {
    classid: "100",
    studentid: "10005",
    pswd: "Wiolga",
    firstname: "William",
    lastname: "Olga"
  }
];

  db.Students
  .remove({})
  .then(() => db.Book.collection.insertMany(StudentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

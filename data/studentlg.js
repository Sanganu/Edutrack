const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactscore10sec",
  {
    useMongoClient: true
  }
);

const stloginseed = [
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
  },
];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(stloginseed))
  .then(data => {
      console.log(data.insertIds.length + "student details inserted!!");
      process.exit(0);
    })
  .catch(err => {
      console.error(err);
      process.exit(1);
  })

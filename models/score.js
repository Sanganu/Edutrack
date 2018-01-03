const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scoreSchema = new Schema({
  student-id: { type: String, required: true },
  date: { type: String, required: true },
  mistakes: String,

});
const Book = mongoose.model("Score", scoreSchema);
module.exports = Score;

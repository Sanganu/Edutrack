const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
        studentid: {
           type: Number,
           required: true,
           unique: true
         },
        studentfname: {
           type: String,
           required: true
          },
      studentlname: {
          type: String,
          required: true,
        },
        studentemain: {
          type:String,
          required: true,
        },
        parenttname: {
          type: String,
          required: true,
        },
        parentemail: {
          type: String,
          requied: true,
        },
        parentphonenumber: {
          type:String,

        },
      addedon : {
        type: Date,
        default: Date.now
        }

});
const studentdetails = mongoose.model("studentdetails", studentSchema);
module.exports = studentdetails;

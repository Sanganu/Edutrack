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
        loginemail: {
          type:String,
          required: true,
        },
        parentname: {
          type: String,
          required: true,
        },
        parentphonenumber: {
          type:String,

        },
      addedon : {
        type: Date,
        default: Date.now
      },
      batchid : {
        type: Schema.Types.ObjectId,
        ref: 'batchdetails'
      }

});
const studentdetails = mongoose.model("studentdetails", studentSchema);
module.exports = studentdetails;

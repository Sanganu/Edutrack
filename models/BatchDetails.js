
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchdetailsSchema = new Schema({
        classid : {
           type:String,
           requires: true,
           unique: true,
        },
        classdetails: {
           type: String,
           required: true
         },
        starttimings: {
           type: String,
           required: true,
          },
          endtimings: {
            type:String,
            required: true,
          },
        level: {
          type: String,

        },
        rate: {
          type: Number,

        },
       createdDate: {
          type:Date,
          default: Date.now
        },
        dayofweek:{
          type: String,
          },
});


const batchdetails = mongoose.model("batchdetails", batchdetailsSchema);
module.exports = batchdetails;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchdetailsSchema = new Schema({
        classdetails: {
           type: String,
           required: true,
           unique: true,
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
        students: [{
          type: Schema.Types.ObjectId,
          ref: 'studentdetails'
        }]
});


const batchdetails = mongoose.model("batchdetails", batchdetailsSchema);
module.exports = batchdetails;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchdetailsSchema = new Schema({
        classid : {
           type:String,
           requires: true,
           unique: true,
        },
        classtdetails: {
           type: String,
           required: true

         },
        timings: {
           type: Number,
           required: true
          },
        level: {
          type: String,
          require: true,
        },
        rate: {
          type: Number,
          required: true,
        },
       createdDate: {
          type:Date,
          default: Date.now
        },
        daysoftheweek: [
          {
            subject: String,
            date: {
              type: Date,
              default: Date.now
            } ,
            timetaken: String
          },
        ]
});
const BatchDetails = mongoose.model("BatchDetails", batchdetailsSchema);
module.exports = BatchDetails;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classdetailsSchema = new Schema({

        lessoncovered: {
           type: String,
         },
         homework: {
           type: String,
         },
        batch: {
          type: Schema.Types.ObjectId,
          ref: 'batchdetails'
        },
       createdDate: {
          type:Date,
          default: Date.now
        },

});


const classdetails = mongoose.model("classdetails", classdetailsSchema);
module.exports = classdetails;

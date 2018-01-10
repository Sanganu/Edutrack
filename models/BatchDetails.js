
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchdetailsSchema = new Schema({
        batchid:{
          type:Number,
          unquie:true,
          required:true
        },
        batchdesc: {
           type: String,
         },
         subject: {
           type: String,

         },
        level: {
          type: String,

        },
        rateperhour: {
          type: Number,
        },
       createdDate: {
          type:Date,
          default: Date.now
        },
        classes: [{
          type: Schema.Types.ObjectId,
          ref: 'classdetails'
        }]
});


const batchdetails = mongoose.model("batchdetails", batchdetailsSchema);
module.exports = batchdetails;


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
        students: [{
          type: Schema.Types.ObjectId,
          ref: 'studentdetails'
        }],
        attendace:[{
          classid :{
            type:Schema.Types.ObjectId,
            ref:'classdetails'
          },
          present: {
            type: Boolean
          }
        }],
       createdDate: {
          type:Date,
          default: Date.now
        },

});


const batchdetails = mongoose.model("batchdetails", batchdetailsSchema);
module.exports = batchdetails;

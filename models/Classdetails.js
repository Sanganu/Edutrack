
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classdetailsSchema = new Schema({
        classid:{
          type:Number,
          unquie:true,
          required:true
        },
        lessoncovered: {
           type: String,
         },
         homework: {
           type: String,

         },
      ,
        batch: {
          type: Schema.Types.ObjectId,
          ref: 'studentdetails'
        },
       createdDate: {
          type:Date,
          default: Date.now
        },

});


const classdetails = mongoose.model("classdetails", classdetailsSchema);
module.exports = classdetails;

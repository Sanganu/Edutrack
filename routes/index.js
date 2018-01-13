const path = require("path");
const router = require("express").Router();
const db = require('../models')

//Create new batch
router.post('/api/teacher/batch/new',function(req,res) {
      var newrecord = req.body;
       console.log("Insiderouter to add new batch",req.body);

      db.batchdetails
             .create(newrecord)
             .then(function(dbdetails){
                console.log("Inserted record details",dbdetails);
                 res.json(dbdetails);
             })
             .catch(function(err){
                  if(err)
                  {
                     var vrmsg  = (err.errmsg).substr(0,6);
                        if( vrmsg === 'E11000')
                           {
                             console.log("Batch ID already exist -- Please use different ID to create a new batch");
                             res.json({
                                 errid: vrmsg,
                                 errstring: "Batch details already exist -- Please delete old batch and register again if this is a new batch",
                                 err : err
                                });
                           }
                         else
                        {
                            console.log("Error on saving batch details",err);
                            res.json({
                              errid: 'OTHERS',
                              errstring: "OTHERS -Error in saving Batch details",
                              err : err
                              });
                        }

                    }

             }); //end catch section
}); // end db.batchdetails


////Add New student And Update Batches table
router.post('/api/teacher/student/new',function(req,res) {
        console.log("Insiderouter to add new student",req.body);
        var uname = (req.body.studentfname).substr(0,1) +(req.body.studentlname);
        var pword = (req.body.parentphonenumber).substr(0,3) + (req.body.studentfname);
        var newrecord = {
          studentfname :req.body.studentfname,
          studentlname: req.body.studentlname,
          parentname: req.body.parentname,
          loginemail: req.body.loginemail,
          parentphonenumber: req.body.parentphonenumber,
          username : uname,
          passw : pword,
          batchid:[req.body.batchid]
        };
        var insertstudent = {
             studentfname : '',
             studentlname : '',
             loginemail: ''
        };
        db.studentdetails
           .create(newrecord)
           .then(function(dbstudentdetails){
              insertedstudent ={
                studentfname : dbstudentdetails.studentfname,
                studentlname : dbstudentdetails.studentlname,
                loginemail : dbstudentdetails.loginemail
              } ;
              console.log("Inserted student record",dbstudentdetails);
              return db.batchdetails.findOneAndUpdate({_id:req.body.batchid}, {$push:{students:dbstudentdetails._id}});

           })
           .then(function(data){
             console.log("Inserted student and updated batchdetails with studentid",data);
             res.json(insertedstudent);
           })
           .catch(function(err){
             if (err)
             {
               var vrmsg  = (err.errmsg).substr(0,6);
               if( vrmsg === 'E11000')
               {
                 console.log("Student Login - already exist");

               }
               else {
                 console.log("The Error",err)
                 res.json(err);
               }

             }

           });
});



// Get All batch details
router.get("/api/teacher/batch/all",(req,res) => {
      console.log("inside router to get all batch records");
        db.batchdetails.find({})
           .then((data) => {
               console.log("Batch details",data);
               res.json(data);
           })
           .catch((err) => {
             console.log("Error in fetching all batch details",err);
             res.json(err);
           });
})

// Add class details -Get All Student details for the batch for class entry
router.get("/api/teacher/batch/:batchid", (req,res) => {
  console.log("In router",req.params.batchid);
  //var bid = mongoose.Types.ObjectId.fromString(batchid);
  db.batchdetails.findOne({_id:req.params.batchid})
     .populate('students')
      .then((data) => {
           console.log("Result from batch - student",data);
           res.json(data);
      })
      .catch((err) => {
        console.log("Error is fetching records",err);
        res.json(err);
      });
});

// Add class details -Get All Student details for the batch for class entry
router.get("/api/teacher/student/all/:batchid", (req,res) => {
  console.log("In router");
  db.batchdetails.find({batchid:req.params.batchid})
     .populate('students')
      .then((data) => {
           console.log("Result from batch - student",data);
           res.json(data);
      })
      .catch((err) => {
        console.log("Error is fetching records",err);
        res.json(err);
      });
});

//Search Option:
router.get("/api/teacher/batch/:searchstr",(req,res) => {
    db.batchdetails.find({})
});

// Student Login route
router.post('/api/others/student/login',function(req,res) {
   console.log("Inside route to validate student loginemail",req.body);
   db.studentdetails
     .findOne({ $and:[
                {loginemail : req.body.semail},
               {username : req.body.suname},
               {passw: req.body.spword}
               ]})
     .populate('batchid')
     .then(function(studentdet){
       console.log("Valid student login",studentdet);
       res.json(studentdet);
     })
     .catch(function(err){
       console.log("Error - Invalid Student Credentials",err);
       res.json(err);
     });

});

////Add Class details And Update Batches table
router.post('/api/teacher/batch/class/new',function(req,res) {
        console.log("Insiderouter to add new student",req.body);
      var newrecord = req.body;
        db.classdetails
           .create(newrecord)
           .then(function(dbclassdetails)
           {
              return db.batchdetails.findOneAndUpdate({_id:req.body.batchid}, {$push:{classid:dbclassdetails._id}});
            })
           .then(function(data){
             console.log("Inserted class details and updated batchdetails with studentid",data);
             res.json(insertedstudent);
           })
           .catch(function(err){
             if (err)
             {
                 console.log("The Error",err)
                 res.json(err);
               }

           });
});


//Get Student details with populat on batch - after valid login
router.get('/api/other/student/:stid',(req,res) =>
{
     db.studentdetails
      .findone({_id:req.params.id})
      .populate({path:'batchid'})
      .exec(function(err,data){
        if (err) return res.json(err);
        console.log('The Result from fetch student and batch',data);
        res.json(data);
      })
      /*
      .then((data) => {
        console.log("Fetch records student populate batch",data);
         res.json(data);
      })
      .catch((err) => {
        console.log("Error in fetching student - batch records",err);
        res.json(err);
      });*/
});

// Route to get max
/*
router.get('/api/teacher/batch/maxid',function(req,res) {
        console.log("in the router to get max");

        db.batchdetails
           .find({$max : "$batchid"})
           .then(function(data){
             res.json(data);
           })
           .catch(function(err){
             if (err)
             {
               console.log("error...",err);
               res.json(err);
             }
           });
});
*/

//Delete Student
router.delete('/api/batch/student/delete/',(req,res) => {
          db.batchdetails.findone({_id: req.body.batchid})
            .then((data) => {
                data.students.remove(req.params.studentid);
                return data.save();
            })
            .then(() => {
              db.studentdetails.remove({_id:req.params.studentid});
            })
            .then((data) => {
              console.log("Student delet",data);
              res.json(data);
            })
            .catch((err) => {
              console.log("Error in deleting student details",err);
              res.json(err);
            });
});

module.exports =router;

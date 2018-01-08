const path = require("path");
const router = require("express").Router();
const db = require('../models')

router.get('/api/students/login',function(req,res) {
   console.log("Inside router",req.body);
   db.Students
     .findOne({_id: req.body.stdid})
     .then(function(studentdet){
       res.json(studentdet);
     })
     .catch(function(err){
       res.json(err);
     });

});

//Create new batch
router.post('/api/teacher/batch/new',function(req,res) {
      var newrecord = req.body;
       console.log("Inside router to add new batch",req.body);

      db.batchdetails
             .create(newrecord)
             .then(function(dbdetails){
                console.log("Inserted record details",dbdetails);
                 res.json(dbdetails);
             })
             .catch(function(err){
                   var vrmsg  = (err.errmsg).substr(0,6);
                      if( vrmsg === 'E11000')
                         {
                           console.log("Batch details already exist -- Please delete batch and register again if this is a new batch");
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

             }); //end catch section
}); // end db.batchdetails


////Add New student
router.post('/api/teacher/student/new',function(req,res) {
        console.log("Inside router to add new student",req.body);
        var newrecord = req.body;
        db.studentdetails
           .create(newrecord)
           .then(function(dbstudentdetails){
              insertedstudent = dbstudentdetails;
              console.log("Inserted student record",dbstudentdetails);
              return db.batchdetails.findOneAndUpdate({_id:req.body.batchid}, {students:dbstudentdetails._id});
           })
           .then(function(data){
             res.json(data);
           })
           .catch(function(err){
             console.log("The Error",err)
             res.json(err);
           });
});

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

// Get All batch details
router.get("/api/teacher/myaccount/batch",(req,res) => {
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

// Get All Student details for the batch
router.get("/api/teacher/batch/student/:batchid", (req,res) => {
  db.batchdetails.find({id:req.params.id})
     .populate('students')
    .then((data) => {
         console.log(data);
         res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Search Option:
router.get("/api/teacher/batch/:searchstr",(req,res) => {
    db.batchdetails.find({})
});

/*
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});*/

module.exports = router;

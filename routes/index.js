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
router.post('/api/batch/new',function(req,res) {
  var newrecord = req.body;
   console.log("Inside router to add new batch",req.body);

  db.batchdetails
     .create(newrecord)
     .then(function(dbdetails){
        console.log("Inserted record details",dbdetails);
         res.json(dbdetails);
     })
     .catch(function(err){
       console.log("Error",err)
       res.json(err);
     });
});

////Add New student
router.post('/api/batch/student/new',function(req,res) {
  console.log("Inside router to add new batch",req.body);
  var newrecord = req.body;
  db.studentdetails
     .create(newrecord)
     .then(function(dbstudentdetails){
        console.log("Inserted record",dbstudentdetails);
        res.json(dbstudentdetails);
     })
     .catch(function(err){
       console.log("The Error",err)
       res.json(err);
     });
});

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;

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
  console.log("Inside router to add new batch",req.body);
  db.BatchDetails
     .create(newrecord)
     .then(function(dbclassdetails){
        console.log("Inserted record");
        res.json(dbclassdetails);
     })
     .catch(function(err){
       res.json(err);
     });
});

////Add New student
router.post('/api/batch/student/new',function(req,res) {
  console.log("Inside router to add new batch",req.body);
  db.StudentDetails
     .create(newrecord)
     .then(function(dbclassdetails){
        console.log("Inserted record");
        res.json(dbclassdetails);
     })
     .catch(function(err){
       res.json(err);
     });
});

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;

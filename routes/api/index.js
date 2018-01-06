const router = require("express").Router();
const studentRoutes = require("./students");

// score routes
router.use("/students", studentRoutes);
module.exports =  router;

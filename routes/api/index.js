const router = require("express").Router();
const bookRoutes = require("./score");

// score routes
router.use("/score", scoreRoutes);
module.exports = router;

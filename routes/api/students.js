const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

// Matches with matches routes
router.route("/")
  .get(studentsController.findAll)
  .post(studentsController.create);

// Matches with routers with parameter
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

module.exports = router;

// Routes needed in index.js where / /api/students conversion happends

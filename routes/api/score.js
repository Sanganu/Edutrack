const router = require("express").Router();
const scoreController = require("../../controllers/scorecontroller");

// Matches with "/api/books"
router.route("/")
  .get(scorecontroller.findAll)
  .post(scorecontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(scorecontroller.findById)
  .put(scorecontroller.update)
  .delete(scorecontroller.remove);

module.exports = router;

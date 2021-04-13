var express = require("express");
var router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post('/validUser',authController.validateUser);


router
  .route("/user")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/user/:id")
  .get(userController.getUser)
  .put(userController.updateMe)
  .delete(userController.deleteMe);
router.route("/username").post(userController.getUsername)
router.route("/userproject").post(userController.getUserProjects)
router.route("/project").post(projectController.createProject)
router.get('/project/:id',projectController.getProject)
module.exports = router;
const express = require("express");
const router = express.Router();

const controller =
require("../controllers/projectController");

router.post("/", controller.addProject);//add
router.get("/:id", controller.getProjectById);//get by id
router.put("/:id", controller.updateProject);//update
router.delete("/:id", controller.deleteProject);//delete
router.get("/", controller.getProjects);//get all

module.exports = router;
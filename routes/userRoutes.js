const express = require("express");
const router = express.Router();

const controller =
require("../controllers/userController");

router.post("/", controller.addUser);//add
router.get("/:id", controller.getUserById);//get by id
router.put("/:id", controller.updateUser);//update
router.delete("/:id", controller.deleteUser);//delete
router.get("/", controller.getUsers);//get all

module.exports = router;
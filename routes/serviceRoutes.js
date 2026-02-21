const express = require("express");
const router = express.Router();

const controller =
require("../controllers/serviceController");

router.post("/", controller.addService);//add
router.get("/:id", controller.getServiceById);//get by id
router.put("/:id", controller.updateService);//update
router.delete("/:id", controller.deleteService);//delete
router.get("/", controller.getServices);//get all

module.exports = router;
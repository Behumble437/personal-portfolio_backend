const express = require("express");
const router = express.Router();

const controller =
require("../controllers/referenceController");

router.post("/", controller.addReference);//add
router.get("/:id", controller.getReferenceById);//get by id
router.put("/:id", controller.updateReference);//update
router.delete("/:id", controller.deleteReference);//delete
router.get("/", controller.getReferences);//get all


module.exports = router;
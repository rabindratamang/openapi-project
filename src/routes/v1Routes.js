const express = require("express");
const router = express.Router();
const v1Controller = require("../controllers/v1Controller");

router.get("/", v1Controller.getAllResources);
router.post("/", v1Controller.createResource);
router.put("/:id", v1Controller.updateResource);
router.patch("/:id", v1Controller.modifyResource);
router.delete("/:id", v1Controller.deleteResource);

module.exports = router;
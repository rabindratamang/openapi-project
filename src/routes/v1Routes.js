const express = require("express");
const router = express.Router();
const v1Controller = require("../controllers/v1Controller");

router.get("/resources", v1Controller.getAllResources);
router.post("/resources", v1Controller.createResource);
router.put("/resources/:id", v1Controller.updateResource);
router.patch("/resources/:id", v1Controller.modifyResource);
router.delete("/resources/:id", v1Controller.deleteResource);

module.exports = router;
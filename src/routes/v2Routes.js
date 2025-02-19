const express = require("express");
const routerV2 = express.Router();
const v2Controller = require("../controllers/v2Controller");

routerV2.get("/", v2Controller.getAllResources);
routerV2.post("/", v2Controller.createResource);
routerV2.put("/:id", v2Controller.updateResource);
routerV2.patch("/:id", v2Controller.modifyResource);
routerV2.delete("/:id", v2Controller.deleteResource);

module.exports = routerV2;
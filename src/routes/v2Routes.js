const express = require("express");
const routerV2 = express.Router();
const v2Controller = require("../controllers/v2Controller");

routerV2.get("/resources/", v2Controller.getAllResources);
routerV2.post("/resources/", v2Controller.createResource);
routerV2.put("/resources/:id", v2Controller.updateResource);
routerV2.patch("/resources/:id", v2Controller.modifyResource);
routerV2.delete("/resources/:id", v2Controller.deleteResource);

module.exports = routerV2;
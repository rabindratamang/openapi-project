const express = require("express");
const routerV2 = express.Router();
routerV2.get("/", (req, res) => res.send("API v2 Root"));
module.exports = routerV2;
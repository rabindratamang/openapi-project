const express = require("express");
const router = express.Router();
router.get("/", (req, res) => res.send("API v1 Root"));
module.exports = router;
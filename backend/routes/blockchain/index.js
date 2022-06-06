const express = require("express");
const router = express.Router();
const blockController = require("./block.controller");

router.get("/test", blockController.test);

module.exports = router;

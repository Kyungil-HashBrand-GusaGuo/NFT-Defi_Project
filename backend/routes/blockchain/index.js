const express = require("express");
const router = express.Router();
const blockController = require("./block.controller");

router.get("/test", blockController.test);
router.post("/test", blockController.test2);

module.exports = router;

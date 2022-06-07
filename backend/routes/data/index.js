const express = require("express");
const router = express.Router();
const dataController = require("./data.controller");

router.get("/test", dataController.test);

module.exports = router;

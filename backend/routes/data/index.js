const express = require("express");
const router = express.Router();
const dataController = require("./data.controller");

router.post("/player", dataController.player);

router.get("/gameRank", dataController.gameRank);

module.exports = router;

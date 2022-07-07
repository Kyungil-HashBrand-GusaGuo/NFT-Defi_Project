const express = require("express");
const router = express.Router();
const dataController = require("./data.controller");

router.post("/player", dataController.player);
router.post("/setrewardedition", dataController.setRewardEdition);

router.get("/gameRank", dataController.gameRank);
router.get("/getrewardedition", dataController.getRewardEdition);

module.exports = router;

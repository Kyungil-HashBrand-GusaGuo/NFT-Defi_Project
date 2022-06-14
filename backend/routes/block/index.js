const express = require("express");
const router = express.Router();
const rController = require("./randomJolaman.controller");
const sController = require("./setData.controller");

// randomZolaman controller
router.get("/normalAll", rController.MAX_NORMAL_TOKEN_COUNT);
router.get("/specialAll", rController.MAX_SPECIAL_TOKEN_COUNT);
router.get("/normalCurrent", rController.CURRENT_NORMAL_TOKEN_COUNT);
router.get("/specialCurrent", rController.CURRENT_SPECIAL_TOKEN_COUNT);
router.post("/isWhiteList", rController.isWhiteList);

// setData controller
router.get("/totalJolamanData", sController.totalJolamanData);
router.post("/ownedTokenId", sController.ownedTokenId);

module.exports = router;

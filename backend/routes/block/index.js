const express = require("express");
const router = express.Router();
const blockAPI = require("./block.api");

router.get("/totalJolamanData", blockAPI.totalJolamanData);
router.get("/normalAll", blockAPI.MAX_NORMAL_TOKEN_COUNT);
router.get("/specialAll", blockAPI.MAX_SPECIAL_TOKEN_COUNT);
router.get("/normalCurrent", blockAPI.CURRENT_NORMAL_TOKEN_COUNT);
router.get("/specialCurrent", blockAPI.CURRENT_SPECIAL_TOKEN_COUNT);

router.post("/isWhiteList", blockAPI.isWhiteList);
router.post("/ownedTokenId", blockAPI.ownedTokenId);

module.exports = router;

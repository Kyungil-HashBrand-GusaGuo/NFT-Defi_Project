const express = require("express");
const router = express.Router();
const randomController = require("./randomZolaman.controller");
const setController = require("./setData.controller");
const saleController = require("./saleZolaman.controller");
const stakeController = require("./stakeSystem.controler");
const gameController = require("./game.controller");

// randomZolaman controller
router.get("/normalAll", randomController.MAX_NORMAL_TOKEN_COUNT);
router.get("/specialAll", randomController.MAX_SPECIAL_TOKEN_COUNT);
router.get("/normalCurrent", randomController.CURRENT_NORMAL_TOKEN_COUNT);
router.get("/specialCurrent", randomController.CURRENT_SPECIAL_TOKEN_COUNT);
router.post("/isWhiteList", randomController.isWhiteList);
router.post("/balanceKlay", randomController.BalanceKlay);
router.post("/airdropapprove", randomController.setApprovedForAll);

// setData controller
router.get("/totalJolamanData", setController.totalJolamanData);
router.post("/ownedTokenId", setController.ownedTokenId);
router.post(
  "/getExceptSellOwnedJolamanType",
  setController.getExceptSellOwnedJolamanType
);
router.get("/getOwner", setController.getOwner);

// saleZolaman controller
router.get("/getOnSaleJolaman", saleController.getOnSaleJolaman);

// stakeSystem controller
router.post("/stakedJolaman", stakeController.getOwnedStakedJolamanType);
router.post("/updateReward", stakeController.updateReward);
router.post("/stakers", stakeController.stakers);
router.post("/balanceOf", stakeController.balanceOf);

// game controller 
router.post("/memorygame", gameController.MemoryGameReward);
router.post("/hangmangamereward", gameController.HangmanGameReward);
router.post("/balanceOfGZLT", gameController.balanceOfGZLT);
router.post("/airdrop", gameController.airDrop);

module.exports = router;

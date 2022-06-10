const express = require("express");
const router = express.Router();
const randomController = require("./randomZolaman.controller");
const setController = require("./setData.controller");
const saleController = require("./saleZolaman.controller");

// randomZolaman controller
router.get("/normalAll", randomController.MAX_NORMAL_TOKEN_COUNT);
router.get("/specialAll", randomController.MAX_SPECIAL_TOKEN_COUNT);
router.get("/normalCurrent", randomController.CURRENT_NORMAL_TOKEN_COUNT);
router.get("/specialCurrent", randomController.CURRENT_SPECIAL_TOKEN_COUNT);
router.post("/isWhiteList", randomController.isWhiteList);

// setData controller
router.get("/totalJolamanData", setController.totalJolamanData);
router.post("/ownedTokenId", setController.ownedTokenId);

// saleJolaman controller
router.get(
  "/getOnSaleJolamanTypeAndPrice",
  saleController.getOnSaleJolamanTypeAndPrice
);
router.post("/SellingJol", saleController.SellingJol);

module.exports = router;

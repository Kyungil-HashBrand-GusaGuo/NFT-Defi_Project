const express = require("express");
const router = express.Router();
const blockRouter = require("./api");
const dataRouter = require("./data");

router.get("/", (req, res) => {
  res.render("index");
});

router.use("/block", blockRouter);
router.use("/data", dataRouter);

module.exports = router;

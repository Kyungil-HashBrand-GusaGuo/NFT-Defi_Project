const express = require("express");
const router = express.Router();
const blockRouter = require("./blockchain");

router.get("/", (req, res) => {
  res.render("index");
});

router.use(blockRouter);

module.exports = router;

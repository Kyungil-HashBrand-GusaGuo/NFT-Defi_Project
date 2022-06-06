const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const nunjucks = require("nunjucks");
const { RandomJolamanContract, MINT_CONTRACT_ADDRESS } = require("./jolamanContract.js");

RandomJolamanContract.methods.MAX_NORMAL_TOKEN_COUNT().call().then(e => console.log(e))
// await를 안썻으므로 .then() method 사용한것

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(router);

app.listen(9495, () => {
  console.log("http://localhost:9495");
});

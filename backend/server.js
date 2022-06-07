const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const nunjucks = require("nunjucks");

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
  console.log("server run 9495");
});

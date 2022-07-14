const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

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

const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.routes");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: `16Kb` }));

app.use("/api/v1/user", userRouter);

module.exports = app;

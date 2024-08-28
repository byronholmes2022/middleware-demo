const express = require("express");
const app = express();

app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => {
  console.log("server running");
});

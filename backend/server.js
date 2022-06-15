const express = require("express");
require("dotenv").config();

// express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ mssg: "Hello World" });
});

// listen for requests on port 4000
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

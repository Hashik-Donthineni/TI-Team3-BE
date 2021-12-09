var express = require("express");
var cors = require("cors");
const authRouter = require("./Routes/auth.routes");

console.error("Inside server");

var app = express();
app.use(express.json());
app.use(cors());

/// ADD ROUTES HERE ///
app.use(authRouter);
////

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.errror("Server running on " + port);
});

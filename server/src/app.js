console.log("hello");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined")); //its a log generator
app.use(bodyParser.json()); //used for processing json data
app.use(cors()); //this is a security risk but allows any host or client to access this application

//requests : get post put patch delete
app.get("/status", (req, res) => {
  res.send({
    message: "This is from server get req",
  });
}); //this is defining route

app.listen(process.env.PORT || 8081);

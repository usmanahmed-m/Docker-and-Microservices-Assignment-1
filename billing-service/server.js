// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Billing service");
});

app.post("/billing", (req, res) => {
  console.log('Received data from Shipping Service');
  console.log('Billing Data: ',req.body);
  res.send(req.body);
});

app.listen(5004);

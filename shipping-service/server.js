// imports
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Shipping Service");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
  res.send("GET SHIPPING");
});

app.post("/shipping", async (req, res) => {
  console.log('Shipping Data: ',req.body);
  try {
  await axios.post("http://billing:5004/billing", {
    employeeId: req.body.employeeId,
    officeAddress: req.body.officeAddress,
    address2: req.body.address2,
    postal: req.body.postal,
    city: req.body.city,
    country: req.body.country
  })
} catch(err){
  console.log(err);
}
res.send(req.body);
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

app.listen(5000);

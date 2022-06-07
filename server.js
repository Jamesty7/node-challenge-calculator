const express = require('express');
const app = express();





///Step 1: Reading endpoint query///

app.get("/add", function (req, res) {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    res.send(addNumbers(value1, value2));
  });
  
  app.get("/substract", function (req, res) {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    res.send(substractNumbers(value1, value2));
  });
  
  app.get("/multiply", function (req, res) {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    res.send(multiplyNumbers(value1, value2));
  });
  
  app.get("/divide", function (req, res) {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    res.send(divideNumbers(value1, value2));
  });
  
  ///Step 2: Reading endpoints parameters///
  app.get("/add/:param1/:param2", function (req, res) {
    const value1 = parseInt(req.params.param1);
    const value2 = parseInt(req.params.param2);
    res.send(addNumbers(value1, value2));
  });
  
  app.get("/substract/:param1/:param2", function (req, res) {
    const value1 = parseInt(req.params.param1);
    const value2 = parseInt(req.params.param2);
    res.send(substractNumbers(value1, value2));
  });
  
  app.get("/multiply/:param1/:param2", function (req, res) {
    const value1 = parseInt(req.params.param1);
    const value2 = parseInt(req.params.param2);
    res.send(multiplyNumbers(value1, value2));
  });
  
  app.get("/divide/:param1/:param2", function (req, res) {
    const value1 = parseInt(req.params.param1);
    const value2 = parseInt(req.params.param2);
    res.send(divideNumbers(value1, value2));
  });
  
  app.listen(3000, () => console.log("Server is up and running"));
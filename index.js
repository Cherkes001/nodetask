const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/hello", function (req, res) {
  res.send({
    success: true,
    data: "world",
  });
});

app.get("/api/get-config", function (req, res) {
  res.send({
    success: true,
    data: {
      port: "Server port: " + listener.address().port,
      host: "Server adress is: " + listener.address().address,
    },
  });
});

app.get("/api/learn", function (req, res) {
  if (req.query.queryParam) {
    res.send({
      success: true,
      data: req.query.queryParam,
    });
  } else {
    res.send({
      success: false,
    });
  }
});

app.get("/api/learn/path/:pathParam", function (req, res) {
  if (req.params.pathParam) {
    res.send({
      success: true,
      data: req.params.pathParam,
    });
  } else {
    res.send({
      success: false,
    });
  }
});

app.post("/api/store-text/:value", function (req, res) {
  res.send({
    success: true,
    data: req.params.value,
  });

  const file = fs.createWriteStream("text.txt");
  file.write(req.params.value);
  file.end();
  /*
  const file = fs.createWriteStream("text.txt");
  file.once("open", function (fd) {
    file.write(req.params.value + "\n");
    file.end();
  });*/
});

let listener = app.listen(3000, "127.0.0.1");
const express = require('express');
const fs = require('fs');
const app = express();
require('dotenv').config();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/api/hello', function (req, res) {
  res.send({
    success: true,
    data: 'world',
  });
});

app.get('/api/get-config', function (req, res) {
  res.send({
    success: true,
    data: {
      port: 'Server port: ' + listener.address().port,
      host: 'Server adress is: ' + listener.address().address,
    },
  });
});

app.get('/api/learn', function (req, res) {
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

app.get('/api/learn/path/:pathParam', function (req, res) {
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

app.post('/api/store-text/:value', function (req, res) {
  fs.appendFile('text.txt', req.params.value + '\n', function (err) {
    if (err) throw err;
  });
  res.send({
    success: true,
    data: req.params.value,
  });
});

app.use('/static', express.static('static'));
//console.log(process.env.npm_package_name);
let listener = app.listen(process.env.PORT, process.env.HOST);

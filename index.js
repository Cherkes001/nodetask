const express = require('express');
const fs = require('fs');
const { userInfo } = require('os');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const { Console } = require('console');
const bodyParser = require('body-parser');
const { request, query } = require('express');
const { Model } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: 'some-db',
  user: 'mongoadmin',
  pass: 'admin',
});

app.use(bodyParser.json());

const Cat = mongoose.model('Cat', { name: String });
app.get('/', async function (req, res) {
  res.send('Hello World');
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
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
  user.find('id', req.queryParam.queryParam);
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

app.post('/api/store-text', function (req, res, next) {
  fs.appendFile('text.txt', req.body.value + '\n', function (err) {
    if (err) throw err;
  });
  res.send({
    success: true,
    data: req.body.value,
  });
  next();
});

/*app.use('/api/write', function (req, res, next) {
  next();
});*/

app.post('/api/writedb', function (req, res, next) {
  const kitty = new Cat({ name: req.body.record });
  kitty.save();
  res.send({
    succes: true,
    data: req.body.record,
  });
  next();
});

app.get('/api/readb', async function (req, res) {
  const options = {
    limit: +req.query.limit || 5,
    page: req.query.page || 1,
  };
  const handle = await Cat.find({})
    .limit(options.limit)
    .skip(options.page * options.limit - options.limit);
  res.send({
    success: true,
    data: handle,
  });
});

app.use('/static', express.static('static'));
let listener = app.listen(process.env.PORT, process.env.HOST);
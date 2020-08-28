require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./src/db/connection.js');
const router = require('./src/routes/index.js');

app.use('/', router);

async function runServer() {
  await connection();
}

runServer()
  .then(() => {
    app.listen(process.env.PORT, process.env.HOST);
    console.log('listen on port ' + process.env.PORT);
  })
  .catch((e) => console.log({ e }));

//sudo docker container start some-mongo

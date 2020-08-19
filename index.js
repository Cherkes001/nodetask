const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/api/hello', function (req, res) {
    //res.send('zdarova ebat');
    res.send(
        {
            "success": "true",
            "data": "world"
        });
});

app.get('/api/get-config', function (req, res) {
    res.send(
        {
        "success": "true",
        "data": {
            "port": 'Server port: ' + listener.address().port,
            "host": "Server adress is: " + listener.address().address,
            }
        });
});

let listener = app.listen(3000, "127.0.0.1")


var express = require('express')
// var proxy = require('http-proxy-middleware')
var app = express()
var fs = require('fs')

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

// app.use('/v1.1/batchdata.api', proxy({target: 'http://123.58.180.166', changeOrigin: true}));

app.get('/recommend', (req, res) => {
    var data = fs.readFileSync('./db/recommend.json')
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.send(JSON.parse(data));
})

app.get('/domainpost', (req, res) => {
    var data = fs.readFileSync('./db/domainpost.json')
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.send(JSON.parse(data));
})
  
var server = app.listen(3000, function () {
    // var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});



var express = require('express');
var fs = require('fs');
var infile = "/home/burgundy/Documents/bitstarter/index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(fs.readFileSync(infile));
  response.send(buf.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

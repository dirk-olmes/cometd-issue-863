var express = require('express');

var server = express();
var path = __dirname + "/../webapp";
server.use("/demo", express.static(path));
console.log("open http://localhost:3000/demo");
server.listen(3000);

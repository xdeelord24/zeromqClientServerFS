// producer.js

var filename = "example/input.txt";
var fs = require('fs');
var zmq = require("zeromq"),
  sock = zmq.socket("push");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Producer bound to port 3000");

setInterval(function() {
  // console.log("sending work");
  const fileContent = fs.readFileSync("example/input.txt", 'utf8');
  sock.send(fileContent);
}, 500);
// producer.js

/* Importing the file system module. */
var fs = require('fs');
/* Importing the zeromq module. */
var zmq = require("zeromq");

/* Defining the file that will be read. */
var filename = "example/input.txt";

/* Creating a socket of type `push`. */
sock = zmq.socket("push");

/* Binding the socket to the port 3000. */
sock.bindSync("tcp://127.0.0.1:3000");
console.log("Producer bound to port 3000");

/* Sending the file content to the consumer every 500 milliseconds. */
setInterval(function() {
  const fileContent = fs.readFileSync("example/input.txt", 'utf8');
  sock.send(fileContent);
}, 500);
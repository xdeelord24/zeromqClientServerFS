// worker.js

/* Loading the zeromq library. */
var zmq = require("zeromq");
/* Loading the file system module. */
var fs = require('fs');

/* Creating a socket of type `pull`. */
sock = zmq.socket("pull");

/* Connecting to the port 3000. */
sock.connect("tcp://127.0.0.1:3000");
console.log("Worker connected to port 3000");

/* Listening for a message from the socket. When it receives a message, it writes it to a file. */
sock.on("message", function(msg) {
  // console.log("work: %s", msg.toString());
  fs.writeFileSync("example/output.txt", msg);
});
/*
	This node script is a server which is paired with a serial client script 
	which when functioning together relay serial data from a single serial 
	device to multiple clients.
*/

// var BleUart = require('./ble-uart');
// var bleSerial = new BleUart('6e400001b5a3f393e0a9e50e24dcca9e');
// var bleData;

// var express = require('express');	// using the express framework
// var app = express();							// initalize express


// // serve static pages from public/ directory:
// app.use('/',express.static('public'));

// // if a client requests /data, return the data:
// app.get('/data', function(request, response){
//   //console.log("Someone asked for the data");
//   response.end(bleData);
// });

// // this function gets called when new data is received from
// // the Bluetooth LE serial service:
// bleSerial.on('data', function(data){
//   bleData = data;
//   console.log("Got new data: " + data);
// });

// // this function gets called when the program
// // establishes a connection with the remote BLE radio:
// bleSerial.on('connected', function(data){
//   console.log("Connected to BLE. Sending a hello message");
//   bleSerial.write("Hello BLE!");
// });

// // thus function gets called if the radio successfully starts scanning:
// bleSerial.on('scanning', function(status){
//   console.log("radio status: " + status);
// });

// // start the server listening:
// app.listen(8873);

var http = require('http');
var fs = require('fs');
var url =  require('url');


function handleIt(req, res) {
	console.log("The URL is: " + req.url);

	var parsedUrl = url.parse(req.url);
	console.log("They asked for " + parsedUrl.pathname);

	var path = parsedUrl.pathname;
	if (path == "/") {
		path = "finalproject.html";
	}

	fs.readFile(__dirname + path,
		function (err, fileContents) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + req.url);
			}
			res.writeHead(200);
			res.end(fileContents);
  		}
  	);	
	
	console.log("Got a request " + req.url);
}


var httpServer = http.createServer(handleIt);

httpServer.listen(8873);  
console.log('Server listening on port 8873');

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 
	function (socket) {	
		console.log("We have a new client: " + socket.id);
	
		socket.on('sensor', function(data) {
			console.log(data);
			io.sockets.emit("sensor", data);
		});
	}
);
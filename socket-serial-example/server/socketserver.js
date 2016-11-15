/*
	This node script is a server which is paired with a serial client script 
	which when functioning together relay serial data from a single serial 
	device to multiple clients.
*/

var http = require('http');
var fs = require('fs');
var url =  require('url');

// var SerialPort = require('serialport');
// var serialPort = new SerialPort("/dev/cu.usbmodem1421", {
//   baudrate: 9600,
// 	parser: SerialPort.parsers.readline('\n')
// });

// var buffer = [];

// serialPort.on("open", function () {
//   console.log('open');
// });

//   var socket = require('socket.io-client')('http://kcl389.itp.io:1025');
//   socket.on('connect', function(){
//   	 console.log("Socket COnnected");

// 	  SerialPort.on('data', function(data) {
	  	
// 	    console.log('data received: ' + data);
// 	    socket.emit('sensor',data);
// 	  });
//   });
// });



function handleIt(req, res) {
	console.log("The URL is: " + req.url);

	var parsedUrl = url.parse(req.url);
	console.log("They asked for " + parsedUrl.pathname);

	var path = parsedUrl.pathname;
	if (path == "/") {
		path = "index.html";
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

httpServer.listen(1025);  
console.log('Server listening on port 1025');

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
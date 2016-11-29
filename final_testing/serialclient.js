/*

	This Node script requires node-serialport and socket.io-client to be installed with NPM
	It is meant to be run on a computer with an arduino or other serial device and relays data to a remote server for broadcasting

*/

var SerialPort = require('serialport');
var serialPort = new SerialPort("/dev/cu.LightBlue-Bean", {
  baudrate: 9600,
	parser: SerialPort.parsers.readline('\n')
});

var buffer = [];

serialPort.on("open", function () {
  console.log('open');

  var socket = require('socket.io-client')('http://kcl389.itp.io:8873');
  socket.on('connect', function(){
  	 console.log("Socket COnnected");

	  serialPort.on('data', function(data) {
	  	
	    console.log('data received: ' + data);
	    socket.emit('sensor',data);
	  });
  });
});

// var SerialPort = require('serialport');
// var serialPort = new SerialPort("/dev/cu.LightBlue-Bean", {
//   baudrate: 9600,
// 	parser: SerialPort.parsers.readline('\n')
// });

// var buffer = [];


// // serialPort.on('sensor', function(data) {
// // 				console.log(data);
// // 				// console.log("Color: " + (data));
				
			
				
// // 				context.fillRect(500, 700, data,data);
				
// // 			});

// serialPort.on("open", function (data) {
//   console.log('open');
//   console.log(data);
//  });

// serialPort.on('sensor', function(data) {
// 	  	console.log('im supposed to show data');
// 	    console.log('data received: ' + data);
// 	    socket.emit('sensor',data);

// 	    // serialPort.write(0);
// });

 
//  var socket = require('socket.io-client')('http://kcl389.itp.io:8873');


//   socket.on('connect', function(){
//   	 console.log("Socket COnnected");


//   });

var mypeerid = null;
var peer = null;
//this is actual connection to peer
//this conneciton means only can talk to one person at a time -- let's make an array!
var connections = [];
var connection = null;



var theCanvas;
var theContxt;
var myCamera;


var videoGo = function() {
	console.log("loaded");

		/////// communication / compatibility jig /////
			window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
			// The video element on the page to display the webcam
			myCamera = document.getElementById('theta');

			// if we have the method
			if (navigator.getUserMedia) {
				navigator.getUserMedia({video: true}, function(stream) {
					myCamera.src = window.URL.createObjectURL(stream) || stream;
					myCamera.play();
					draw();
					console.log("thetaGo!");

				}, function(error) {alert("Failure " + error.code);});
		}

		//create the canvas
		// theCanvas = document.getElementById('theCanvas');
		// theContxt = theCanvas.getContext('2d');

		}
//

// function draw(){
//  	theContxt.drawImage(myCamera,0,0,theCanvas.width,theCanvas.height);
// 	theContxt.strokeRect(0,0,theCanvas.width,theCanvas.height);
// 	theContxt.fillStyle = "green";
//  	setTimeout(draw,100);
// //
//
// } ///THIS IS THE END OF draw



var init = function() {
	window.addEventListener('load', videoGo);
			//getting access to mouse move event
			document.addEventListener('mousemove' , function(evt){
				console.log(evt);
				// evt.clientX;
				// evt.clientY;

				for (var c = 0; c < connections.length; c++) {
					connections[c].send({x: evt.clientX, y: evt.clientY}.value);
				}

			});

			//connects to peer address book
			peer = new Peer('rebecca',{host: 'liveweb.itp.io', port: 9001, path: '/'});
			//callbacks ---> same as with audi oand video
			//get id from the server
			peer.on('open', function(id) {
				console.log('My peer ID is: ' + id);
				mypeerid = id;
			});

			peer.on('error', function(msg){
				console.log("message");
			});
//when we get a connection from a remote peer - this runs
			//this is when someone connectes to us
			peer.on('connection', function(conn) {
				//takes connection and puts it into global variable
				connection = conn;
				connection.on('open', function() {
					//when connection has oepn dmeathod established chat log
					// document.getElementById('chatlog').innerHTML += "Connection Established <br />";

				});
				//whenever data comes in from someone else this gets clled

				connection.on('data', function(data) {
					// document.getElementById('chatlog').innerHTML += data;
						document.getElementById('othermouse').style.left = data.x + "px";
						document.getElementById('othermouse').style.top = data.y + "px";
				});
				connections.push(connection);
			});
		};
//send whats in txt feield
//to "broadcast" to everyone

		var sendMessage = function() {
			for (var c = 0; c < connections.length; c++) {
				connections[c].send(document.getElementById('chat').value);
			}

			document.getElementById('chat').value = "";
		};
//peer dot connect goes into whoever name in txt feild
		var makeConnection = function() {
		peer.connect(document.getElementById('other_peer_id').value);
//same as above -- this is when we make conneciton
	connection.on('open', function(data) {
				document.getElementById('chatlog').innerHTML += "Connection Established <br />";
//this is the line that makes the one a server......
			broadcastMessage(data);
			});

			connection.on('data', function(data) {
				document.getElementById('chatlog').innerHTML += data + "<br />";

			});
					connections.push(connection);
		};

//this is the line that makes the one a server......
		var broadcastMessage = function(msg){
		for (var c = 0; c < connections.length; c++) {
				connections[c].send(msg);
			}
		}

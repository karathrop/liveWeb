//omg thx rubin!
//this is the clientSide JS webRTC && peer server stuff.
var webRTC = {
			peer : null,
			connection : null,
			mypeerid : null,
		};

var theCanvas;
var theContxt;
var myCamera;
var theyCamera;
var myStream = null;

var counter = 0;
var mypeerid = null;
var peer = null;
var connection = null;
var incoming;

var videoGo = function(){
		// The video element on the page to display the webcam
	window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	myCamera = document.getElementById('myvideo');

	// if we have the method
	if (navigator.getUserMedia) {
			navigator.getUserMedia({video: true, audio: true}, function(stream) {
							myStream = stream;
							myCamera.src = window.URL.createObjectURL(stream) || stream;
							myCamera.play();
							draw();
							console.log("faceGO!");
					}, function(err) {
							console.log('Failed to get local stream' ,err);
			});
}

theCanvas = document.getElementById('theCanvas');
theContxt = theCanvas.getContext('2d');
}


webRTC.Go = function() {
		console.log("loaded");

		//get the webRTC data from client
	webRTC.peer = new Peer({
					host: 'index',
					port: 9001,
					path: '/',
					secure: true
			});

	//open connection with that client
	webRTC.peer.on('open', function(id) {
			console.log('My peer ID is: ' + id);
				webRTC.mypeerid = id;
				document.getElementById("connection").innerHTML = "My ID is " + webRTC.mypeerid;
		});

		webRTC.peer.on('connection', function() {
				console.log("Connected");
				document.getElementById("connect").innerHTML += "Say something and see if anyone is listening.";
		});

		// Receive from any event
		// webRTC.peer.on('chatmessage', function(data) {
		// 		console.log(data);
		// 		incoming = data;
		// 		addReceived();
		// });

		// webRTC.peer.on('connection', function(conn) {
		// 		webRTC.connection = conn;
		// 		webRTC.connection.on('open', function() {
		// 				document.getElementById('chatlog').innerHTML += "Connection Established";
		// 		});

		webRTC.peer.on('call', function(incoming_call) {
			console.log("Got a call!", incoming_call);
			incoming_call.answer(myStream); // Answer the call with our stream from getUserMedia

			incoming_call.on('stream', function(remoteStream) {  // we receive a getUserMedia stream from the remote caller
			// And attach it to a video object
		theyCamera = document.getElementById("othervideo");
			theyCamera.id = "cam-"+incoming_call.peer;
			theyCamera.src = window.URL.createObjectURL(remoteStream) || remoteStream;
			theyCamera.setAttribute("autoplay", "true");
			theyCamera.play();
			document.body.appendChild(theyCamera);
			});
		});
	}; //this is the end of Go

	var placecall = function() {
			webRTC.connection = webRTC.peer.connect(document.getElementById('other_peer_id').value,{reliable:false});
			webRTC.connection.on('open', function(data) {
					document.getElementById('chatlog').innerHTML += "Connection Established";
			});

			webRTC.connection.on('data', function(data) {
					console.log(data);
					incoming = data;
					addReceived();
			});
	};
//
// function clearContents(element) {
// 				element.value = '';
// 		}

		function draw(){
			theContxt.drawImage(myCamera,0,0,myCamera.width,myCamera.height);
			// theContxt.drawImage(theyCamera,0,0,theyCamera.width,theyCamera.height);
			theContxt.strokeRect(0,0,theCanvas.width,theCanvas.height);
			setTimeout(draw,100);
		}


window.addEventListener('load', function(){
			videoGo();
			// webRTC.Go();
		});

//omg thx Rubin Huang!!!

//this is the clientSide JS webRTC && peer server stuff.

var webRTC = {
			peer : null,
			connection : null,
			mypeerid : null,
		};

var counter = 0;
var mypeerid = null;
var peer = null;
var connection = null;
var incoming;

webRTC.Go = function() {
		console.log("loaded");

		//get the webRTC data from client
	webRTC.peer = new Peer({
					host: 'localhost',
					port: 8088,
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
		webRTC.peer.on('chatmessage', function(data) {
				console.log(data);
				incoming = data;
				addReceived();
		});

		webRTC.peer.on('connection', function(conn) {
				webRTC.connection = conn;
				webRTC.connection.on('open', function() {
						document.getElementById('chatlog').innerHTML += "Connection Established";
				});

		webRTC.connection.on('data', function(data) {
						//document.getElementById('chatlog').innerHTML += data;
						console.log(data);
						incoming = data;
						addReceived();
				});
		});

		webRTC.peer.on('call', function(incoming_call) {
			console.log("Got a call!");
			incoming_call.answer(my_stream); // Answer the call with our stream from getUserMedia

			incoming_call.on('stream', function(remoteStream) {  // we receive a getUserMedia stream from the remote caller
			// And attach it to a video object
			var ovideoElement = document.getElementById('othervideo');
			ovideoElement.src = window.URL.createObjectURL(remoteStream) || remoteStream;
			ovideoElement.setAttribute("autoplay", "true");
			ovideoElement.play();

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

function clearContents(element) {
				element.value = '';
		}


// window.addEventListener('load', videoGo);

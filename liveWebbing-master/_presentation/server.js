//server to make life simplier slash it's the way rubin suggested i do it slash want to do it shawn's way but had rubin && marcela's exapmle code

var peerPort = 8088;
//HTTPS
var servicePort = 8086;

var express = require('express');
var app = express();


//--------------https-----------------------//

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('my-key.pem'),
  cert: fs.readFileSync('my-cert.pem')
};

 var httpsServer = https.createServer(options, app);
 httpsServer.listen(servicePort,function(){

   console.log("");
   console.log("---------------| Express |-----------------");
   console.log("");
   console.log("Service server open on " + ":" + servicePort);

 });



//-------------Express----------------------//

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});



//-------------Peer.js---------------------//

var PeerServer = require('peer').PeerServer;
//HTTPS
var server = new PeerServer({port: peerPort, ssl: options, allow_discovery: true});


server.on('connection', function (id) {
  console.log('new connection with id ' + id);
});

server.on('disconnect', function (id) {
  console.log('disconnect with id ' + id);
});

console.log("");
console.log("--------------| Peer |------------------");
console.log("");
console.log('peer server running on ' + ':' + peerPort);

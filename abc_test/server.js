			var colordata;

			var socket = io.connect('http://kcl389.itp.io:8873');

			socket.on('connect', function() {
				console.log("Connected");
			});

			var context;
			var count = 0;



			socket.on('sensor', function(data) {
				console.log(data);
				// console.log("Color: " + (data));
				
			
				
				context.fillRect(500, 700, data,data);
				
			});
			
			// function init() {
			// 	var canvas = document.getElementById('mycanvas');
			// 	context = canvas.getContext('2d');
			// 	context.clearRect(50,300,600,600);
			// 	context.fillStyle = "rgb(150, 100, 200)";
			
			// }

			window.addEventListener('load', init);
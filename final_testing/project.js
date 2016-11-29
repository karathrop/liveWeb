		var socket = io.connect('http://kcl389.itp.io:8873');

		var context;

		var myArray = [
						"There's something I want to tell you...",
						"Your love makes me move",
						"Hey, thinking of you", 
						"Just thought of of something funny",
						"I can't wait to see you"];
		var myIndex = 0;
		var print = document.getElementById('print');

		print.innerHTML = myArray[0]; //Print first value of array right away.

		// socket.on('sensor', function(data) {
		// 		console.log(data);
		// 		console.log("Color: " + (data));
				
			
		// 		context.fillRect(data, data, data,data);
		// 		context.fillRect(500, 700, data,data);
				
		// 	});

		// function init() {
			// var canvas = document.getElementById('mycanvas');
			// context = canvas.getContext('2d');


			function nextElement() {
		  		if (myIndex < myArray.length) {
			     print.innerHTML = myArray[myIndex];
			     myIndex++;
		  		}
		 		else {
		     	myIndex = 0;   
		  		}
			};
		// }

		window.addEventListener('load', init);

		
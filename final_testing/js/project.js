		var socket = io.connect('http://kcl389.itp.io:8873');

		// var init = function() {

		// 		var button = document.getElementById("enterbutton");

		// 			button.addEventListener("click", function() {
		// 			console.log("click");
		// 			Page1.style.display="none";
		// 			Page2.style.display="block";
		// 		});
		// };

		var context;

		var myArray = [
						"I am waiting to tell you a story",
						"Tell you about my day",
						"Tell me about yours", 
						"I want to hug you",
						"I want to be close to you",
						"You make me move"];
		var myIndex = 0;
		var print = document.getElementById('print');

		

		print.innerHTML = myArray[0]; //Print first value of array right away.

		socket.on('sensor', function(data) {
				console.log(data);
		

		  		if (data == 0) {
					console.log("message 1 should show")
					print.innerHTML = myArray[0];
					document.body.style.backgroundColor = "#a38bf4";

				} else if (data == 5) {
					console.log("message 4 should show")
					print.innerHTML = myArray[1];
					document.body.style.backgroundColor = "#ff7373";
				
				} else if (data == 10) {
					console.log("message 5 should show")
					print.innerHTML = myArray[2];
					document.body.style.backgroundColor = "#0096d6";
				} else if (data == 15) {
					console.log("message 6 should show")
					print.innerHTML = myArray[3];
					document.body.style.backgroundColor = "#d44dac";
				
				} else if (data == 20) {
					console.log("message 2 should show")
					print.innerHTML = myArray[4];
					document.body.style.backgroundColor = "#ff2e94";
					
				} else if (data == 25) {
					console.log("message 3 should show")
					print.innerHTML = myArray[5];
					document.body.style.backgroundColor = "#b7f2de";
				}
				
		
				
			});

		

			function nextElement() {
		  		if (myIndex < myArray.length) {
			     print.innerHTML = myArray[myIndex];
			     myIndex++;
		  		}
		 		else {
		     	myIndex = 0;   
		  		}

		  		socket.emit('sensor', myIndex);
			};
		// }

		// window.addEventListener('load', init);

		
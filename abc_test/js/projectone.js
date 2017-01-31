		var socket = io.connect('http://kcl389.itp.io:8874');



		var context;

		var myArray = 	[
						"I am waiting to tell you something",
						"You are sweet and wonderful",
						"Let's cuddle all night", 
						"I want to hug you",
						"Why are you interrupting me",
						"Can you pick up your socks?",
						"I need some space",
						"You know I love but you're being really annoying",
						];
						
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
					$( "#toggle" ).effect( "shake" );
					document.body.style.backgroundColor = "#05034b";

					
				} else if (data == 25) {
					console.log("message 3 should show")
					print.innerHTML = myArray[5];
					document.body.style.backgroundColor = "#b7f2de";
				}  else if (data == 30) {
					console.log("message 3 should show")
					print.innerHTML = myArray[6];
					document.body.style.backgroundColor = "#1c5755";
					$( "#toggle" ).effect( "bounce", "slow" );
				}   else if (data == 35) {
					console.log("message 3 should show")
					print.innerHTML = myArray[7];
					document.body.style.backgroundColor = "red";
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

		
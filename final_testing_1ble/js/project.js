		var socket = io.connect('http://kcl389.itp.io:8873');

		var context;

		var myArray = [
						"I am waiting to tell you",
						"You are sweet and wonderful",
						"Let's cuddle all night", 
						"I want to hug you",
						"Why are you interrupting me",
						"Can you pick up your socks?",
						"I need some space",
						"You know I love but you're being really annoying",
						];

		var myArray2 = [
						"I am waiting to listen",
						"I am not ready to talk",
						"I need more time",
						"Why are you pressuring me"
						
						];
		var myIndex = 0;
		var myIndex2 = 0;
		var print = document.getElementById('print');
		var print2 = document.getElementById('print2');

		

		print.innerHTML = myArray[0]; //Print first value of array right away.
		print2.innerHTML = myArray2[0]; //Print first value of array right away.

		socket.on('sensor', function(data) {
			console.log("HELLO");
				console.log(data);

				var rightDiv = document.getElementById('rightscreen');
		

				if (data == 300) {
					console.log("I am waiting to listen");
					print2.innerHTML = myArray2[0];
					//rightscreen= document.body.style.backgroundColor = "green";
					rightscreen= rightDiv.style.backgroundColor = "#260026";
				}

				else if (data == 400) {
					console.log("I am not ready to talk");
					print2.innerHTML = myArray2[1];
					rightscreen= rightDiv.style.backgroundColor = "#f13c2f";
					$( "#toggle" ).effect( "shake" );
				}

				else if (data == 500) {
					console.log("I need more time");
					print2.innerHTML = myArray2[2];
					//rightscreen= document.body.style.backgroundColor = "blue";
					rightscreen= rightDiv.style.backgroundColor = "red";
					$( "#toggle" ).effect( "bounce", "slow" );
				}

				else if (data == 600) {
					console.log("Why are you pressuring me");
					print2.innerHTML = myArray2[3];
					//rightscreen= document.body.style.backgroundColor = "blue";
					rightscreen= rightDiv.style.backgroundColor = "black";
					$( "#toggle" ).effect( "bounce", "slow" );
				}
		});

		socket.on('sensor', function(data) {
				console.log("BYE");
				console.log(data);

				var leftDiv = document.getElementById('leftscreen');


		  		if (data == 0) {
					console.log("message 1 should show")
					print.innerHTML = myArray[0];
					
					//document.body.style.backgroundColor = "#a38bf4";
					leftscreen = leftDiv.style.backgroundColor = "#a38bf4";
					
					

				} else if (data == 5) {
					console.log("message 2 should show")
					print.innerHTML = myArray[1];
					//document.body.style.backgroundColor = "#ff2e94";
					leftscreen = leftDiv.style.backgroundColor = "#ff2e94";
					
				} else if (data == 10) {
					console.log("message 3 should show")
					print.innerHTML = myArray[2];
					//document.body.style.backgroundColor = "#0096d6";
					leftscreen = leftDiv.style.backgroundColor = "#0096d6";
					
				} else if (data == 15) {
					console.log("message 4 should show")
					print.innerHTML = myArray[3];
					//document.body.style.backgroundColor = "#d44dac";
					// $( "#toggle" ).effect( "bounce", "slow" );
					leftscreen = leftDiv.style.backgroundColor = "#d44dac";
				
				} else if (data == 20) {
					console.log("message 5 should show")
					print.innerHTML = myArray[4];
					//document.body.style.backgroundColor = "#630e70";
					leftscreen = leftDiv.style.backgroundColor = "#630e70";
					
					
				} else if (data == 25) {
					console.log("message 6 should show")
					print.innerHTML = myArray[5];
					//document.body.style.backgroundColor = "#233953";
					leftscreen = leftDiv.style.backgroundColor = "#233953";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
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

		
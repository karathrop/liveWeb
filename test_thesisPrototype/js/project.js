		var socket = io.connect('http://kcl389.itp.io:8873');

		var context;

		var myArray = [
						"bricks 1",
						"bricks 2",
						"bricks 3"
						];

		var myArray2 = [
						"brick1",
						"brick2",
						"What are you up to?",
						"On my way",
						"Have you heard my new joke",
						"I need more time",
						"What are you wearing tonight?",
						"Why are you pressuring me",
						"I miss you",
						"I love you"
						
						];
		
		var print = document.getElementById('print');
		var print2 = document.getElementById('print2');

		

		print.innerHTML = myArray[0]; //Print first value of array right away.
		print2.innerHTML = myArray2[0]; //Print first value of array right away.

		socket.on('sensor', function(data) {
			console.log("HELLO");
				console.log(data);

				var rightDiv = document.getElementById('rightscreen');
		

				if (data == 0) {
					console.log("I am waiting to listen");
					print2.innerHTML = myArray2[0];
					//rightscreen= document.body.style.backgroundColor = "green";
					rightscreen= rightDiv.style.backgroundColor = "#261E3B";
				}

				else if (data == 5) {
					console.log("I am not ready to talk");
					print2.innerHTML = myArray2[1];
					rightscreen= rightDiv.style.backgroundColor = "#53BB96";
					
				}

				else if (data == 10) {
					console.log("I need more time");
					print2.innerHTML = myArray2[2];
					//rightscreen= document.body.style.backgroundColor = "blue";
					rightscreen= rightDiv.style.backgroundColor = "#F02C23";
					
				}

				else if (data == 15) {
					console.log("Why are you pressuring me");
					print2.innerHTML = myArray2[3];
					//rightscreen= document.body.style.backgroundColor = "blue";
					rightscreen= rightDiv.style.backgroundColor = "#F0AB2D";
					$( "#toggle" ).effect( "shake" );

				}  else if (data == 20) {
					console.log("message 5 should show")
					print2.innerHTML = myArray2[4];
					//document.body.style.backgroundColor = "#630e70";
					rightscreen = rightDiv.style.backgroundColor = "#39479B";
					$( "#toggle" ).effect( "bounce", "slow" );
					
					
				} else if (data == 25) {
					console.log("message 6 should show")
					print2.innerHTML = myArray2[5];
					//document.body.style.backgroundColor = "#233953";
					rightscreen = rightDiv.style.backgroundColor = "#414045";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );

				}  else if (data == 30) {
					console.log("message 6 should show")
					print2.innerHTML = myArray2[6];
					//document.body.style.backgroundColor = "#233953";
					rightscreen = rightDiv.style.backgroundColor = "#A63359";
					$( "#toggle" ).effect( "bounce", "fast" );

				} else if (data == 35) {
					console.log("message 6 should show")
					print2.innerHTML = myArray2[7];
					//document.body.style.backgroundColor = "#233953";
					rightscreen = rightDiv.style.backgroundColor = "#18233C";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
				} else if (data == 40) {
					console.log("message 6 should show")
					print2.innerHTML = myArray2[8];
					//document.body.style.backgroundColor = "#233953";
					rightscreen = rightDiv.style.backgroundColor = "#18233C";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
				}  else if (data == 45) {
					console.log("message 6 should show")
					print2.innerHTML = myArray2[9];
					//document.body.style.backgroundColor = "#233953";
					rightscreen = rightDiv.style.backgroundColor = "#0E7339";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
				}
		});

		socket.on('sensor left', function(data) {
				console.log("BYE");
				console.log(data);

				var leftDiv = document.getElementById('leftscreen');


		  		if (data == 0) {
					console.log("message 1 should show")
					print.innerHTML = myArray[0];
					leftscreen = leftDiv.style.backgroundColor = "#84CBEE";
					
					
				} else if (data == 5) {
					console.log("message 2 should show")
					print.innerHTML = myArray[1];
					leftscreen = leftDiv.style.backgroundColor = "#E47561";
					
				} else if (data == 10) {
					console.log("message 3 should show")
					print.innerHTML = myArray[2];
					leftscreen = leftDiv.style.backgroundColor = "#B0AAD8";
					
				} else if (data == 15) {
					console.log("message 4 should show")
					print.innerHTML = myArray[3];
					leftscreen = leftDiv.style.backgroundColor = "#FDCB69";
					$( "#toggle" ).effect( "shake" );
				
				} else if (data == 20) {
					console.log("message 5 should show")
					print.innerHTML = myArray[4];
					leftscreen = leftDiv.style.backgroundColor = "#F6D0DD";
					$( "#toggle" ).effect( "shake" );
					
					
				} else if (data == 25) {
					console.log("message 6 should show")
					print.innerHTML = myArray[5];
					//document.body.style.backgroundColor = "#233953";
					leftscreen = leftDiv.style.backgroundColor = "#F7315C";
					$( "#toggle" ).effect( "bounce", "fast" );
					

				}  else if (data == 30) {
					console.log("message 6 should show")
					print.innerHTML = myArray[6];
					leftscreen = leftDiv.style.backgroundColor = " #F17089";
					$( "#toggle" ).effect( "bounce", "fast" );

				} else if (data == 35) {
					console.log("message 6 should show")
					print.innerHTML = myArray[7];
					//document.body.style.backgroundColor = "#233953";
					leftscreen = leftDiv.style.backgroundColor = "#8B5C99";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
				} else if (data == 40) {
					console.log("message 6 should show")
					print.innerHTML = myArray[8];
					//document.body.style.backgroundColor = "#233953";
					leftscreen = leftDiv.style.backgroundColor = "#8B5C99";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
				} else if (data == 45) {
					console.log("message 6 should show")
					print.innerHTML = myArray[9];
					//document.body.style.backgroundColor = "#233953";
					leftscreen = leftDiv.style.backgroundColor = "#8B5C99";
					$( "#toggle" ).effect( "bounce", "fast" );
					// $( "#toggle" ).toggle( "explode" );
				}
		
				
			});

		

			// function nextElement() {
		 //  		if (myIndex < myArray.length) {
			//      print.innerHTML = myArray[myIndex];
			//      myIndex++;
		 //  		}
		 // 		else {
		 //     	myIndex = 0;   
		 //  		}

		  		//socket.emit('sensor', myIndex);
			// };
		// }

		// window.addEventListener('load', init);

		
var myArray = [
						"I am waiting for a message",
						"Your love makes me move",
						"Hey, thinking of you", 
						"Just thought of of something funny",
						"Message 4: yesss",
						"Message 5: woo hoo",
						"Message 6: oh yeah"];

var myIndex = 0;
var print = document.getElementById('print');

print.innerHTML = myArray[0];

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
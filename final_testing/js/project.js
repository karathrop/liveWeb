
		var myArray = [
						"There's something I want to tell you...",
						"Your love makes me move",
						"Hey, thinking of you", 
						"Just thought of of something funny",
						"I can't wait to see you"];
		var myIndex = 0;
		var print = document.getElementById('print');

		print.innerHTML = myArray[0]; //Print first value of array right away.

		function nextElement() {
		  if (myIndex < myArray.length) {
		     print.innerHTML = myArray[myIndex];
		     myIndex++;
		  }
		  else {
		     myIndex = 0;   
		  }
		};
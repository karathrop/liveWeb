function init() {

				var button = document.getElementById("signwithme");

				button.addEventListener("click", function() {
					Page1.style.display="none";
					Page3.style.display="none";
					Page2.style.display="block";
					birthdayvid.pause();
					introVid.pause();
					
				})


				var arthurDefault = document.getElementById("arthurDefault");

				// var baby_portrait = document.getElementById("baby_portrait");

				var arthur3 = document.getElementById("arthur3");

				var videos = document.getElementById("videos");
				
				
				var lyric2 = document.getElementById("lyric2");
				

				videos.onended = function() {
					arthurDefault.style.display="block";
					videos.style.display="none";
					
				}

				function playVideo(videoURL) {
					videos.src= videoURL;
					videos.innerHTML =""; //clear video tag
					// var subt = document.createElement("track");
					// subt.kind="subtitles";
					// subt.src= subtitleURL;
					// subt.default ="default";
					// subt.srclang="en";
					// videos.appendChild(subt);
					videos.play();
					arthurDefault.style.display="none";
					arthur1yr.style.display="none";
					
					arthur3.style.display="none";
					arthur4.style.display="none";
					arthur5.style.display="none";
					arthur6.style.display="none";
					arthurDefault.style.display="none";
					videos.style.display="block";
					lyric1.style.color="white"
					lyric2.style.color="white";
					lyric3.style.color="white";
					lyric4.style.color="white";
					lyric5.style.color="white";
					lyric6.style.color="white";
					lyric7.style.color="white";
					lyric8.style.color="white";
				}

				lyric1.addEventListener("click", function()  {
					arthur1yr.style.display = "block";					
					arthur3.style.display="none";
					arthur5.style.display="none";
					arthur6.style.display="none"
					videos.style.display="none";
					this.style.color="#cffde5";
					
				});
				
				lyric2.addEventListener("click", function()  {
					console.log("video2")
					playVideo("videos/arthur2.mp4");
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur5.style.display="none";
					arthur6.style.display="none"
					//videos.style.display="none";
					this.style.color="#cffde5";
					
				});
				lyric3.addEventListener("click", function()  {
					arthur3.style.display = "block";
					arthur5.style.display="none";
					arthur6.style.display="none";
					arthur1yr.style.display = "none";
					arthur4.style.display = "none";	
					videos.style.display="none";
					this.style.color="#cffde5";
				});

				lyric4.addEventListener("click", function()  {
					arthur4.style.display = "block";
					videos.style.display="none";
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur5.style.display="none";
					arthur6.style.display="none";					
					this.style.color="#cffde5";
				});
				
				lyric5.addEventListener("click", function()  {
					arthur5.style.display = "block";
					videos.style.display="none";
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur6.style.display="none";
					arthur4.style.display="none";					
					this.style.color="#cffde5";
				});
				lyric6.addEventListener("click", function()  {
					arthur6.style.display = "block";
					videos.style.display="none";
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur4.style.display="none";
					arthur5.style.display="none";
					this.style.color="#cffde5";
				});

				lyric7.addEventListener("click", function()  {
					playVideo("videos/arthur7.mp4");					
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur5.style.display="none";
					arthur4.style.display="none";
					arthur6.style.display="none";
					this.style.color="#cffde5";
				});

				var backbutton = document.getElementById("backbutton");
				var backbuttonPage3 = document.getElementById("backbuttonPage3");

				backbutton.addEventListener("click", function(){
					Page3.style.display="none";
					Page2.style.display="none";
					Page1.style.display="block";
					videos.pause();
					birthdayvid.play();
					introVid.play();
				});
				backbuttonPage3.addEventListener("click", function(){
					Page3.style.display="none";
					Page2.style.display="none";
					Page1.style.display="block";
					videos.pause();
					birthdayvid.pause();
					introVid.play();
				});

				songbutton = document.getElementById("songbutton");
				songbutton.addEventListener("click", function(){
					Page3.style.display="block";
					Page1.style.display="none";
					Page2.style.display="none";
					introVid.pause();
					videos.pause();
					birthdayvid.play();
				});

		}
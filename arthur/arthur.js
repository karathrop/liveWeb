function init() {

				var button = document.getElementById("signwithme");

				button.addEventListener("click", function() {
					Page1.style.display="none";
					Page2.style.display="block";
					introVid.style.display = "none";
				})


				var arthurDefault = document.getElementById("arthurDefault");

				// var baby_portrait = document.getElementById("baby_portrait");

				var arthur3 = document.getElementById("arthur3");

				var videos = document.getElementById("videos");
				
				
				var lyric2 = document.getElementById("lyric2");
				// var lyric2 = document.getElementById("lyric2");
				// var lyric3 = document.getElementById("lyric3");
				// var lyric4 = document.getElementById("lyric4");
				// var lyric5 = document.getElementById("lyric5");
				// var lyric6 = document.getElementById("lyric6");

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
					arthur5.style.display="none";
					arthur6.style.display="none";
					arthurDefault.style.display="none";
					videos.style.display="block";
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
					videos.style.display="none";
					this.style.color="#cffde5";
					
				});
				
				lyric2.addEventListener("click", function()  {
					playVideo("videos/arthur2.mp4");
					arthur3.style.display="none";
					this.style.color="#cffde5";
					
				});
				lyric3.addEventListener("click", function()  {
					arthur3.style.display = "block";
					videos.style.display="none";
					this.style.color="#cffde5";
				});
				// lyric3.addEventListener("click", function()  {
				// 	playVideo("videos/vid3.mp4", "subtitles/vid3.vtt");
				// 	this.style.color="#cffde5";
				// });
				// lyric4.addEventListener("click", function()  {
				// 	playVideo("videos/vid4.mp4", "subtitles/vid4.vtt");
				// 	this.style.color="#cffde5";
				// });
				lyric5.addEventListener("click", function()  {
					arthur5.style.display = "block";
					videos.style.display="none";
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur6.style.display="none";
					
					this.style.color="#cffde5";
				});
				lyric6.addEventListener("click", function()  {
					arthur6.style.display = "block";
					videos.style.display="none";
					arthur1yr.style.display="none";
					arthur3.style.display="none";
					arthur5.style.display="none";
					this.style.color="#cffde5";
				});

				backbutton = document.getElementById("backbutton");

				backbutton.addEventListener("click", function(){
					Page2.style.display="none";
					Page1.style.display="block";				
				})
		}
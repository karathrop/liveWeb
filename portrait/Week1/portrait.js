// function init() {

				var button = document.getElementById("signwithme");

				button.addEventListener("click", function() {
					Page1.style.display="none";
					Page2.style.display="block";
				})

				var portraits_all = document.getElementById("portraits_all");

				var baby_portrait = document.getElementById("baby_portrait");

				var videos = document.getElementById("videos");
				var subtitle = document.getElementById("subtitle");
				
				var lyric1 = document.getElementById("lyric1");
				var lyric2 = document.getElementById("lyric2");
				var lyric3 = document.getElementById("lyric3");
				var lyric4 = document.getElementById("lyric4");
				var lyric5 = document.getElementById("lyric5");
				var lyric6 = document.getElementById("lyric6");

				videos.onended = function() {
					baby_portrait.style.display="block";
					videos.style.display="none";
					
				}

				function playVideo(videoURL, subtitleURL) {
					videos.src= videoURL;
					videos.innerHTML =""; //clear video tag
					var subt = document.createElement("track");
					subt.kind="subtitles";
					subt.src= subtitleURL;
					subt.default ="default";
					subt.srclang="en";
					videos.appendChild(subt);
					videos.play();
					portraits_all.style.display="none";
					baby_portrait.style.display="none";
					videos.style.display="block";
					lyric1.style.color="white";
					lyric2.style.color="white";
					lyric3.style.color="white";
					lyric4.style.color="white";
					lyric5.style.color="white";
					lyric6.style.color="white";
				}
				
				lyric1.addEventListener("click", function()  {
					playVideo("vid1.mp4", "vid1.vtt");
					this.style.color="#cffde5";
					
				});
				lyric2.addEventListener("click", function()  {
					playVideo("vid_2.mp4", "vid_2.vtt");
					this.style.color="#cffde5";
				});
				lyric3.addEventListener("click", function()  {
					playVideo("vid3.mp4", "vid3.vtt");
					this.style.color="#cffde5";
				});
				lyric4.addEventListener("click", function()  {
					playVideo("vid4.mp4", "vid4.vtt");
					this.style.color="#cffde5";
				});
				lyric5.addEventListener("click", function()  {
					playVideo("vid5.mp4","vid5.vtt");
					this.style.color="#cffde5";
				});
				lyric6.addEventListener("click", function()  {
					playVideo("vid6.mp4", "vid6.vtt");
					this.style.color="#cffde5";
				});

				backbutton = document.getElementById("backbutton");

				backbutton.addEventListener("click", function(){
					Page2.style.display="none";
					Page1.style.display="block";
					
				})
		
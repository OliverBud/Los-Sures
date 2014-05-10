$(document).ready(function () {
    console.log('jquery');
    setInterval(intID, 10000); 

    });

var varCounter = 0;  
//you initial location or time 
var Story = ["this is the first part", "this is the second part", "this is the third part"]
//var video = document.getElementById("video1"); 

var intID= function() {
    changeStory(); 
    	if (varCounter <= 5){
    		varCounter++; 
            playVideo(); 
    		//increase that as the video is playing
    	} else {
    		clearInterval(intID); 
            stopVideo(); 
    	}

    }; 

function playVideo() {
    var video = document.getElementById("Video1"); 
    video.play(); 
   // changeStory(); 
}

function stopVideo() {
    var video = document.getElementById("Video1"); 
    video.pause(); 
}

function changeStory() {
    var currentStory; 
    for (var i=0; i<Story.length; i++) {
        console.log("this is i"+ i); 
        var currStory = i;  
        showStory(currStory); 
    } 
  //  showStory(currStory); 
    console.log("this is i"+i); 
}


function showStory(currStory) {
   $('#text').html('<span>' + Story[currStory] +'<span><br>'); 
   console.log("this is the currentStory" + Story[currStory]); 
}




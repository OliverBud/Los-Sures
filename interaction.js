//you initial location or time 
//var Story = ["This is a walking story", "It takes 10 minutes", 
//"You can start walking anywhere in the world", "but you will end up in the same place", "You are", "neither here", "nor there.", "Me too."]
//var video = document.getElementById("video1"); 

//var shownStory = new Array(); 
 
$(document).ready(function () {
    console.log('jquery');
    setInterval(intID, 3000); 
    //setInterval(showStory(), 3000); 

    });

var intID= function() {
    console.log("just called the interval"); 
    	if (varCounter <= 5){
    		varCounter++; 
            //playVideo(); 
            //changeStory(0); 
    		//increase that as the video is playing
    	} else {
    		clearInterval(intID); 
            //stopVideo(); 
            //changeStory();
    	}

    }; 






 function playVideo() {
     var video = document.getElementById("Video1"); 
     video.play(); 
 }

// function stopVideo() {
//     var video = document.getElementById("Video1"); 
//     video.pause(); 
// }


// function changeStory(previousStory) {
//     console.log("the story should change"); 
//     //var currStory = previousStory; 
//     // var i=0; 
//     //previousStory++; 
//     var currStory = previousStory; 
//     //it is giving me an undefined. 
//     console.log("this is the currStory"+ currStory); 

//     console.log("this is the story length"+ Story.length); 
//      if (currStory<Story.length) {
//             console.log("im in the while loop"); 
//            // showStory(currStory); 
//             console.log("this is the currentStory" + currStory);
//             showStory(currStory);  
//             //I have to check that current story is not the same as previous story before i upload
//             //them into the array 
//             //shownStory.push(currStory); 
//            // console.log("this is the length of the shownStory"+ shownStory.length)
//     }
// }


// function showStory(currStory) {
//    $('#text').html('<span>' + Story[currStory] +'<span><br>'); 
//    //console.log("this is the currentStory" + Story[currStory]); 
//    //changeStory(currStory); 
// }






// function changeStory() {
//     var currentStory; 
//     for (var i=0; i<Story.length; i++) {
//         console.log("this is i"+ i); 
//         var currStory = i;  
//         showStory(currStory); 
//     } 
//   //  showStory(currStory); 
//     console.log("this is i"+i); 
// }


// function showStory(currStory) {
//    $('#text').html('<span>' + Story[currStory] +'<span><br>'); 
//    console.log("this is the currentStory" + Story[currStory]); 
// }




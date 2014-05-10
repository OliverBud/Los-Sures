$(document).ready(function () {
    console.log('jquery');
    setInterval(intID, 1000); 

    });

var varCounter = 0;  
//you initial location or time 

var intID= function() {
    	if (varCounter <= 10){
    		console.log("this is being called")
    		varCounter++; 
    		//increase that as the video is playing
    		console.log("this is the counter" + varCounter); 

    	} else {
    		clearInterval(intID); 

    	}

    }; 

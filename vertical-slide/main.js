

 //$("#button").onClick(alert("you clicked")); 
function buttonClicked() {

  $(function(){ 
    var gif = false; 
    var $vsliderboxes = $('#vsliderboxes').children();
    function autoslide(){
        var $active = $vsliderboxes.filter('.active');
        if ($active.index() === ($vsliderboxes.length - 1)) {
            //we need to loop back to the beginning
            var $next = $vsliderboxes.eq(0);
            //loadGif(); 
        } else {
            var $next = $active.next();
        }
        $active.slideUp(300, function () {
            $active.removeClass('active');
        });
        $next.slideUp(300, function () {
            $next.addClass('active');
        });

        //if we have finished looping through the images, -2 because you start at the last index.
         if ($active.index()=== ($vsliderboxes.length-2)){
         //clearInterval(slide); 
         loadGif();   
         gif = true; 
         }
        console.log("this is the active index"+ $active.index()); 
    }

    setInterval(autoslide,3000); 

    //$("#button").click(alert("you clicked")); 
});
}


function loadGif() {
    console.log("the gif is loaded"); 
    var gif = document.getElementById("gif1"); 
    gif.setAttribute('src', 'blue_flower.gif'); 
    //$("#gif1").append('<img src='+ "blue_flower.gif" + '>'); 
   // clearInterval(slide); 

    //display:block
    //display:hide; 
    //we will add the inner source of the img tag. 
}
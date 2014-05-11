$(function(){

    //var boxheight = $('.box').height();
    
    function clickslide(){
    }
    
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
         loadGif();   
         gif = true; 
         }
        console.log("this is the active index"+ $active.index()); 
    }
    
    //if (gif) 
    //stop autoslide
});


function loadGif() {
    console.log("the gif is loaded"); 
    //we will add the inner source of the img tag. 
}
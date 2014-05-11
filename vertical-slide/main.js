$(function(){

    //var boxheight = $('.box').height();
    
    function clickslide(){
    }
    
    var $vsliderboxes = $('#vsliderboxes').children();
    function autoslide(){
        var $active = $vsliderboxes.filter('.active');
        if ($active.index() === ($vsliderboxes.length - 1)) {
            //we need to loop back to the beginning
            var $next = $vsliderboxes.eq(0);
        } else {
            var $next = $active.next();
        }
        $active.slideUp(300, function () {
            $active.removeClass('active');
        });
        $next.slideUp(300, function () {
            $next.addClass('active');
        });
    }
    
    //this is where we would add where and how it happens. 
    $('#vslidernav ul a').click(clickslide);
    
    window.setInterval(autoslide, 2000)
    
});
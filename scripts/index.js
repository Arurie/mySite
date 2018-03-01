$(document).ready(function(){

  $('.m-banner-img').css('height',($(window).height())*1+'px');
  $('.buffer').css('height',($(window).height())*1+'px');
  $(window).resize(function(){
    $('.m-banner-img').css('height',($(window).height())*1+'px');
  });

	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});

   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
    $('.m-banner').css('top','-'+((scrolledY*3))+'px');
   	}

});

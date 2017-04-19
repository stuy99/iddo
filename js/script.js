(function($) {

	// Akordeon pre our works, ternarny operator
	var name = $('.name'),
	    square = $('.square');

	    name.hide();
	    square.on('mouseenter mouseleave', function(event){
	    	var slide = event.type === 'mouseenter' ? $('.name',this).slideDown() : $('.name',this).slideUp(1000);
	    	$('.name',this).slide;
	    });

	// ==============================================================================================
	//                                            Slider  ==================================================================================


	var slider = $('#slider'),
	    slide = $('.slide');
	slider.children(':not(:last)').hide();
	var sliderInterval = setInterval(function () {
			slider.children(':last')
				.animate({right:3000},function () {$(this).prependTo(slider);})
				.prev().show().animate({right:0},{duration:1000,easing:'swing'});
		},4000);

	// var slider = $('#slider'),
	//     slide = $('.slide');
	//
	// slider.children(':not(:last)').hide();
	//
	// var sliderInterval = setInterval(function () {
	// 	slider.children(':last')
	// 		.slideToggle(1000, function () {$(this).prependTo(slider);})
	// 		.prev().slideToggle(1500);
	// },1800);
	
// ================================================= circle =============================================== //
 $('#circle').circleProgress({
    value: 0.75,
    size: 170,
    fill: {
      color: ["red"]
    },
	startAngle:4.7
  });

})(jQuery);

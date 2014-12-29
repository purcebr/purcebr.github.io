$(document).ready( function () {

	var pleasingColors = Please.make_color({
		colors_returned: 3, //set number of colors returned
		value: .7 //set your value manually
	});

	$('.section__overlay--primary').css('background-color', pleasingColors[0]); //First Color
	$('.section__overlay--secondary').css('background-color', pleasingColors[1]); //Second Color
	$('.section__overlay--tertiary').css('background-color', pleasingColors[2]); //First Color
	
	//btn color styles
	$('<style>.btn--colored:hover { background-color: ' + pleasingColors[2] + '; border-color: ' + pleasingColors[2] + '; </style>').appendTo('head');

	//Hide Contact Form

	var contact = $('#contact').hide();

	$('.get-in-touch').click(function(e) {
		contact.slideToggle();
		$(this).toggleClass('btn--active');
	});

	$('#show-free-and-paid-section').click(function(e) {
		e.preventDefault();
		$("#free-and-paid-section").slideToggle();
	});

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

});
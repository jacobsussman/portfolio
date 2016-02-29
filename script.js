/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";

	$("#mobileNavLink").click(function () {
		if ($("#mobileNav").is(":hidden")) {
			$("#mobileNav").velocity("slideDown", {duration: 200});
		} else {
			$("#mobileNav").velocity("slideUp", {duration: 200});
		}
	});
	

	
	
	$('.grid').isotope({
  // options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
	$('.filter-button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
	});
	
	$(".grid-item").hover(function () {
		(this).velocity({
			p: {background: "black" },
			o: { duration: 500 }
		});

	});
	
    // Target your .container, .wrapper, .post, etc.
	$(".video").fitVids();

});



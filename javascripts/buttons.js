$(document).ready(function(){
	$('.show-more').on('click', function(){
			$('#more-projects').velocity("fadeIn", { duration: 1200 });
			$('.show-more').velocity("scroll", { duration: 1200, easing: "ease-in-out" }).css({ "display": "none" });
	});
	
	$('.fa-angle-down').on('click', function(){
		$('#recent-projects').velocity("scroll", { duration: 1200, easing: "ease-in-out" });
	});

	$('#weatherify-link').on('click', function(){
		window.open('http://weatherify.herokuapp.com/', '_blank');
	});

	$('#bero-link').on('click', function(){
		window.open('http://bero.herokuapp.com/', '_blank');
	});

	$('#message-link').on('click', function(){
		window.open('http://tweet-in-a-bottle.herokuapp.com/', '_blank');
	});

	$('#alt-link').on('click', function(){
		window.open('http://alt-shft.com/', '_blank');
	});

	$('#untitled-link').on('click', function(){
		window.open('http://billsearle.me/untitledproductions/', '_blank');
	});

	$('#nerd-link').on('click', function(){
		window.open('http://fancifulnerd.com/', '_blank');
	});
});

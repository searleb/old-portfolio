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

	$('#clock-demo-link').on('click', function(){
		window.open('http://billsearle.me/hex-clock/', '_blank');
	});

	$('#clock-install-link').on('click', function(){
		window.open('https://chrome.google.com/webstore/detail/hex-clock/pdonflklnjbgccapfenhjdanehgejbkj', '_blank');
	});

	$('#text-clock-demo-link').on('click', function(){
		window.open('http://searleb.github.io/text-clock/', '_blank');
	});
	$('#text-clock-install-link').on('click', function(){
		window.open('https://chrome.google.com/webstore/detail/text-clock/caacmmeopdailkdlgkimndodjipilaha', '_blank');
	});
});

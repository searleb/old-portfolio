$(document).ready(function(){
	$('.show-more').on('click', function(){
		$('#more-projects').velocity("fadeIn", { duration: 750 });
		$(this).velocity({
			height: '0px',
			'margin-top': '0px',
			'margin-bottom': '0px',
			padding: '0px 12px',
			opacity: '0',
			border: 'none'
		},{
			duration: 500,
			delay: 250
		})
		.velocity("scroll", { duration: 1200, easing: "ease"});
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
		window.open('http://searleb.github.io/alt_shft/', '_blank');
	});

	$('#untitled-link').on('click', function(){
		window.open('http://searleb.github.io/untitled-productions', '_blank');
	});

	$('#nerd-link').on('click', function(){
		window.open('http://fancifulnerd.com/', '_blank');
	});

	$('#clock-demo-link').on('click', function(){
		window.open('http://searleb.github.io/color-clock/', '_blank');
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

	$('#coffee-demo-link').on('click', function(){
		window.open('https://chrome.google.com/webstore/detail/text-clock/caacmmeopdailkdlgkimndodjipilaha', '_blank');
	});

});

$(document).ready(function(){
	var width = $(window).width();
	var height = $(document).height();
	var t = new Trianglify();
	var pattern = t.generate(width, height);

	$('#background').css({
		'background': pattern.dataUrl
	});
	$('#contact').css({
		'background': pattern.dataUrl +'no-repeat center center fixed'
	});
})
;

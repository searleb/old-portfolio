$(document).ready(function(){
	var t = new Trianglify({
		noiseIntensity: 0,
	});
	var width = $(document).width();
	var height = $(document).height();
	var pattern = t.generate(width, height);
	$('#background').css({
		'background': pattern.dataUrl
	});
	$('#contact').css({
		'background': pattern.dataUrl
	});
})
;

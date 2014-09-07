// set #background-* to full window height and fade in the body
$(document).ready(function(){
	var width = $(window).width();
	var height = $(window).height();
		$('#background-container').css({
			'min-width': width,
			'min-height': height
		});
		$('#background-1').css({
			'min-width': width,
			'min-height': height
		});
		$('#background-2').css({
			'min-width': width,
			'min-height': height
		});
});

var svg = {};
var draw = 1

var svgNew = function(){
	svg.t = new Trianglify({
		noiseIntensity: 0,
	});
	svg.width = $(window).width();
	svg.height = $(window).height();
	svg.pattern = svg.t.generate(svg.width, svg.height);

	if (draw === 1) {
		svgDraw1();
	} else {
		svgDraw2();
	}
};

var svgDraw1 = function (resize){
	draw = 2
		if (resize === 'resize') {	
			svg.pattern = svg.t.generate(svg.width, svg.height);
			$('#background-1').css({
			'min-width': svg.width,
			'min-height': svg.height,
			'background': svg.pattern.dataUrl
		});
	} else {
	$('#background-1').css({
		'background': svg.pattern.dataUrl
	});
		fade1();
	};

	// button hover
$('.btn').hover(
  function() {
    $( this ).css({
    	'background-image': svg.pattern.dataUrl
    });
  }, function() {
    $( this ).css({
    	'background-image': 'none'
    });
  });
}; // end svgDraw1


var svgDraw2 = function(resize){
	draw = 1
		if (resize === 'resize') {	
			svg.pattern = svg.t.generate(svg.width, svg.height);
			$('#background-2').css({
			'min-width': svg.width,
			'min-height': svg.height,
			'background': svg.pattern.dataUrl
		});
	} else {
	$('#background-2').css({
		'background': svg.pattern.dataUrl
	});
		fade2();
	};
};

var fade1 = function(){
	$('#background-1').velocity("fadeIn", { duration: 3000 });
	$('#background-2').velocity("fadeOut", { duration: 4000 });
};
var fade2 = function(){
	$('#background-2').velocity("fadeIn", { duration: 3000 });
	$('#background-1').velocity("fadeOut", { duration: 4000 });
};

var recreateSvg = function(){
 	window.setInterval(svgNew, 5000)
}

$(document).ready(function(){
	svgNew();
	recreateSvg();
});

$(window).resize(function() {
	svg.width = $(window).width();
	svg.height = $(window).height();
	$('#background-container').css({
		'min-width': svg.width,
		'min-height': svg.height
	});
	svgDraw1('resize');
	svgDraw2('resize');
});

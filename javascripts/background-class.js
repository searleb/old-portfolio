$(document).ready(function() {
	if ($.browser.mobile === true) {
		console.log('false')
		$('#background').addClass('mobile-wrapper');
	} else {
	console.log('true');
	};
});

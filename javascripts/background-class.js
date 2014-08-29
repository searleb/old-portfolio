// media queries based on iphone and ipad sizes
$(document).ready(function() {      
    var isMobile = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 568px)");
    var isTablet = window.matchMedia("only screen and (min-device-width: 768px) and (max-device-width: 1024px)");

    if ((isMobile.matches) || (isTablet.matches))  {
        $('#background').addClass('mobile-wrapper');
    }
 });


$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 1024px");

    if (isMobile.matches) {
        $('#background').addClass('mobile-wrapper');
    }
 });

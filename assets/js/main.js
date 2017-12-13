// Awwww yep, I'm too lazy to do it on pure JavaScript, and if Bootstrap 4 uses jQuery - why not do this too?
// Load this on JS initialization
$(document).ready(function() {
    applyDaytimeStyle();
});

// Hmm. Leave it here, or disable o.O
// Sets background and applies light or dark theme, based on current time.
function applyDaytimeStyle() {
    var hours = new Date().getHours();
    if (hours > 22 || hours < 4) {
    	$("#notprintable").addClass("bg-dark");
    	$("#notprintable").addClass("text-light");
    	$("#welcome-overlay").addClass("night");
    } else if (hours > 16) {
        $("#notprintable").addClass("bg-dark");
    	$("#notprintable").addClass("text-light");
    	$("#welcome-overlay").addClass("evening");
    } else if (hours > 11) {
        $("#notprintable").addClass("bg-light");
    	$("#notprintable").addClass("text-dark");
    	$("#welcome-overlay").addClass("daytime");
    } else if (hours > 3) {
        $("#notprintable").addClass("bg-dark");
    	$("#notprintable").addClass("text-light");
    	$("#welcome-overlay").addClass("morning");
    }
}

// I didn't found better solution than this.
$('#ParadigmBreakdown').click(function() {
    // Hide content of browser-rendered page...
    $("#notprintable").addClass("d-none");
    // ...and show printable page.
    $("#printable").removeClass("d-print-block");
    $("#printable").addClass("d-block");
});

$('#ParadigmRestoration').click(function() {
    // Hide content of printable page...
    $("#notprintable").removeClass("d-none");
    // ...and show browser-rendered page.
    $("#printable").removeClass("d-block");
    $("#printable").addClass("d-print-block");
});

// Navigation bar should be always be visible.
$(window).on('load scroll resize orientationchange', function() {
    NavbarHeight = 50 + 2;
    ScreenHeight = $(window).height();
    ViewportHeight = ScreenHeight - NavbarHeight;
    if ($(window).scrollTop() > ViewportHeight) {
        $('.navbar').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top');
    }
});

// Ekko's Lightbox want this. Okay.
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

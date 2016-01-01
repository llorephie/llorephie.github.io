function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 7) {
        document.write("<link rel='stylesheet' href='/main/css/solarized-dark.css' />");
    }
    if (7 <= currentTime && currentTime < 22) {
        document.write("<link rel='stylesheet' href='/main/css/solarized-light.css' />");
    }
    if (22 <= currentTime && currentTime <= 24) {
        document.write("<link rel='stylesheet' href='/main/css/solarized-dark.css' />");
    }
}
getStylesheet();

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('.navbar li').click(function(e) {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
});

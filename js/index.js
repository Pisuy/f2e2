// init
$('#Social').hide();

// event
$(window).on('scroll', function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 300) {
        $('#Social').fadeIn();
    } else {
        $('#Social').fadeOut();
    }

    if ($(window).scrollTop() == 0) {
        $('#Header').removeClass('header-active');
    } else {
        $('#Header').addClass('header-active');
    }

});
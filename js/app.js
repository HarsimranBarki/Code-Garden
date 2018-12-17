function updateOutput() {
    $('.main__iframe').contents().find("html").html('<html><head><style type="text/css">' + $('#main-css').val() + '</style></head><body>' +
        $('#main-html').val() + '</body></html>');
    eval($('#main-js').val());
}

$('.header__group-buttons').click(function () {
    $(this).toggleClass('header__group-buttons--active');
    var panels = $(this).attr('id');
    $('#main-' + panels).toggle();


});

$('.main__textarea').height($(window).height() - $('.header').height());
$('#main-output').width(($(window).width() / 2) - 10);

$(document).ready(function () {
    updateOutput();
})




$('.main__textarea').on('change keyup paste', function () {
    updateOutput();
});



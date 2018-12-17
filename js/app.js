$('.header__group-buttons').click(function () {
    $(this).toggleClass('header__group-buttons--active');
    var panels = $(this).attr('id');
    $('#main-' + panels).toggle();

});

$('.main__textarea').height($(window).height() - $('.header').height());
$('#main-output').width(($(window).width() / 2) - 10);



$('#main-html').on('change keyup paste', function () {
    $('.main__iframe').contents().find("html").html($('#main-html').val());
});
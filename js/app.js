var textarea = document.getElementsByClassName('main__textarea');

function updateOutput() {
    $('.main__iframe').contents().find("html").html('<html><head><style type="text/css">' + $('#main-css').val() + '</style></head><body>' +
        $('#main-html').val() + '</body></html>');

}

$('.header__group-buttons').click(function () {
    $(this).toggleClass('header__group-buttons--active');
    var panels = $(this).attr('id');
    $('#main-' + panels).toggle();
});

$('.header__group-buttons--play').toggleClass('.header__group-buttons--play-active')


$('.main__textarea').height($(window).height() - $('.header').height());
$('#main-output').width(($(window).width() / 2) - 10);

$(document).ready(function () {
    updateOutput();
})

// var checkInputs = function (event) {
//     updateOutput();
// };

// textarea.addEventListener('paste', checkInputs, true);
// textarea.addEventListener('keyup', checkInputs, true);
// textarea.addEventListener('change', checkInputs, true);


$('.main__textarea').on('change keyup paste', function () {
    updateOutput();
});

document.getElementById('runjs').addEventListener('click', function () {
    document.getElementById('main-output').contentWindow.eval($('#main-js').val());
})

$(document).ready(function(){
    var golovna = "../index.html";

    $('#exit').on('click', function () {
        $(location).attr('href', golovna);
    });
    $('.addDeal').on('click', function () {
        $('.edit ol').append('<li><input></li>');
        $('.edit ol li').append('')
    })
});
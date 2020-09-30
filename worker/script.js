$(document).ready(function(){
    var golovna = "../index.html";

    $('#exit').on('click', function () {
        $(location).attr('href',golovna);
    });
});
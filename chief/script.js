$(document).ready(function(){
    $('body').css("display", "none").fadeIn(1000);
    var golovna = "../index.html";

    $('#exit').on('click', function () {
        $("body").fadeOut(1500, redirect);
       function redirect() {
           $(location).attr('href', golovna);
       };
    });
    $('.addDeal').on('click', function () {
        $('.edit ol').append('<li class="dial"><input><button class="dell">X</button></li>');
            $('.dell').on('click', function () {
                let th = $(this).parent();
             $(th).remove('.dial');
            });
    })
});
//  clock //
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;
    var t = setTimeout(currentTime, 1000);
}
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
currentTime();
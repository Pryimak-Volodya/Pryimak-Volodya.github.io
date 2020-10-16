$(document).ready(function(){
    $('body').css("display", "none").fadeIn(1000);
    var golovna = "../index.html";


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
    setTimeout(currentTime, 1000);
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
////////Через localStorage//////////
var myBase = JSON.parse(localStorage.getItem('myBase'));
    for  (i = 0; i < myBase.length; i++) {
    if (myBase[i].online) {
        WorkerPost = myBase[i].position;
        WorkerName = myBase[i].name;
    }
}
$('#workerName').append(WorkerName);
$('#position').append("<span>"+WorkerPost+"</span>");

$('#exit').on('click', function () {
    $("body").fadeOut(1500, redirect);
    function redirect() {
        $(location).attr('href', golovna);

    }
})
////////Через JSON на сервері//////////
/*
$.ajax({
    url: '../user.json',
    method: 'get',
    async: false,
    dataType: 'html',
    success: function (position) {
        list = JSON.parse(position);
    }
});
user_dataBase = list;
function getPosition(){
    for  (i = 0; i < user_dataBase.length; i++) {
        if (user_dataBase[i].online) {
            WorkerPost = user_dataBase[i].position;
            WorkerName = user_dataBase[i].name;
        }
    }
    $('#workerName').append(WorkerName);
    $('#position').append("<span>"+WorkerPost+"</span>");
}
getPosition();
*/
////////Через script.js//////////
/*
    $.ajax({
        url: '../script.js',
        dataType: "script",
        async: false,
        success: function (data) {
            console.log(this.on);
        }
    });

*/
});
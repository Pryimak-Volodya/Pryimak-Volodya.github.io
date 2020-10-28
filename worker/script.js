$(document).ready(function(){
    $('body').css("display", "none").fadeIn(1000);
    var golovna = "../index.html";
    $('#exit').on('click', function () {
        $("body").fadeOut(1500, redirect);
        sessionStorage.clear();
        function redirect() {
            $(location).attr('href', golovna);
        }
    })
});

////////Через sessionStorage//////////
var myBase = JSON.parse(sessionStorage.getItem('myBase'));
var todoList = JSON.parse(localStorage.getItem('todo'));
    for  (i = 0; i < myBase.length; i++) {
    if (myBase[i].online) {
        WorkerPost = myBase[i].position;
        WorkerName = myBase[i].name;
    }
}
    $('#workerName').append(WorkerName);
    $('#position').append("<span>"+WorkerPost+"</span>");

function listOn() {
    let out = '';
    const outDiv = document.querySelector('#out');
    for (i = 0; i < todoList.length; i++) {
        out += '<li class="dial"><input id="one" type="checkbox"/>'+ todoList[i].todo +'</li>';
    }
    outDiv.innerHTML = out;
    $('#nameForList').append(WorkerName);
    /*
    document.querySelector(".dell").addEventListener('click', function() {
           this.parentNode.remove(this.parentNode);
    })*/
    $('.dell').on('click', function () {
        let th = $(this).parent();
        $(th).remove('.dial');
    })
}
listOn();
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

$(document).ready(function() {
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
////Список завдань//////
    var todoList = [];

    if (localStorage.getItem('todo')) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }
    document.getElementById('addDeal').onclick = function () {
        var temp = {};
        temp.todo = document.getElementById('in').value;
        temp.check = false;
      //  temp.worker = Worker_id;
        todoList.push(temp);
        out();
       localStorage.setItem('todo', JSON.stringify(todoList));
    }
    function out() {
        var out = '';
        for (i = 0; i < todoList.length; i++) {
                out += '<li class="dial">'+ todoList[i].todo +'<button id="dell">X</button></li>';
        }
        document.getElementById('out').innerHTML = out;
        document.getElementById("dell").onclick = function() {
            dellElem = document.getElementsByClassName('dial');
            console.log(dellElem);
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
    }
/*
    $('.addDeal').on('click', function () {
        $('.edit ol').append('<li class="dial"><input><button class="dell">X</button></li>');
            $('.dell').on('click', function () {
                let th = $(this).parent();
             $(th).remove('.dial');
            });
    })

*/
////////Через sessionStorage//////////
    var myBase = JSON.parse(sessionStorage.getItem('myBase'));
    for  (i = 0; i < myBase.length; i++) {
        if (myBase[i].online) {
            ChiefPost = myBase[i].position;
            ChiefName = myBase[i].name;
        }
    }
    $('#chiefrName').text(ChiefName);
    $('#position').append("<span>" +ChiefPost+"</span>");


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
////////Через JSON на сервері//////////
/*
    $.ajax({
        url: '../user.json',
        method: 'get',
        async: false,
        dataType: 'html',
        success: function (name) {
            person = JSON.parse(name);
        }
    });
    user_dataBase = person;
    $('#chiefrName').text(user_dataBase.name);
});
 */

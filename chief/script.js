$(document).ready(function(){
    let golovna = "../index.html";
    $('body').css("display", "none").fadeIn(1000);
    $('#exit').on('click', function () {
        $("body").fadeOut(1500, redirect);
        sessionStorage.clear();
        function redirect() {
            $(location).attr('href', golovna);
        }
    })
})
////Список завдань//////
    let todoList = [];
    if (localStorage.getItem('todo')) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }
    document.querySelector('#addDeal').addEventListener('click',function () {
        let temp = {};
        temp.todo = document.querySelector('#in').value;
        temp.check = false;
        temp.WorkerName = 'WorkerName';
        todoList.push(temp);
        out();
       localStorage.setItem('todo', JSON.stringify(todoList));
    })
    function out() {
        let out = '';
        const outDiv = document.querySelector('#out');
        for (i = 0; i < todoList.length; i++) {
            out += '<li class="dial">'+ todoList[i].todo +'<button class="dell">X</button></li>';
        }
        outDiv.innerHTML = out;
        /*
        document.querySelector(".dell").addEventListener('click', function() {
               this.parentNode.remove(this.parentNode);
        })*/
        $('.dell').on('click', function () {
            let th = $(this).parent();
            $(th).remove('.dial');
        })
    }
    $('.dell').on('click', function () {
        let th = $(this).parent();
        $(th).remove('.dial');
    })
/*
    $('.addDeal').on('click', function () {
        $('.edit ol').append('<li class="dial"><input><button class="dell">X</button></li>');
            $('.dell').on('click', function () {
                let th = $(this).parent();
             $(th).remove('.dial');
            });
    })
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

*/
//  clock //
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;
    let t = setTimeout(currentTime, 1000);
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

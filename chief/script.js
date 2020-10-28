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
////////Через sessionStorage//////////
    var myBase = JSON.parse(sessionStorage.getItem('myBase'));
    function getData() {
        for (i = 0; i < myBase.length; i++) {
            if (myBase[i].online) {
                chiefName = myBase[i].name;
                chiefPost = myBase[i].position;
            }
        }
        $('#chiefName').text(chiefName);
        $('#position').append("<span> " + chiefPost + "</span>");
        getWorkers()
    }
    getData();
    function getWorkers() {
        let work = [];
        for (i = 0; i < myBase.length; i++) {
            if (myBase[i].chief === chiefName) {
                work.push(myBase[i].name) ;
                workerName1 = work[0];
                workerName2 = work[1];
                workerName3 = work[2];
            }
        }
    $('#tab-1, #nameForList').append(workerName1);
    $('#tab-2').append(workerName2);
    $('#tab-3').append(workerName3);
    }

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
        temp.WorkerName = workerName1;
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
        arr = Array.prototype.slice.call( $(".dial") );
        console.log(arr);
        $('.dell').on('click', function () {
            let th = $(this).parent();
            $(th).remove('.dial');
            indexLi = arr.indexOf(th[0]);
           console.log(indexLi);
           localStorage.removeItem('todo');

        })
    }
    $('.dell').on('click', function () {
        let th = $(this).parent();
        $(th).remove('.dial');
      //  localStorage.removeItem();
       // console.log(th);
    })

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



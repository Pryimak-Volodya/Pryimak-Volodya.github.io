window.onload = function () {
    clonv = $('ul').clone();
    $('.ul_user')[0].children[0].remove();
    console.log(clonv)
};
$($('.edit_user_menu_2')[0]).children().on('click', user_list);
function user_list() {
    $.ajax({
        url: '../user.json',
        method: 'get',
        async: false,
        dataType: 'html',
        success: function (name) {
            person = JSON.parse(name);
        }
    });
    switch (this.innerHTML) {
        case 'All worker':
            all_user()
            break
        case 'Admin':
            andin_user()
            break
        case 'Moder.':
            moderator_user()
            break
        case 'Worker':
            work_user()
            break
    }
};

function all_user() {
    leng_all = $('.ul_user')[0].children.length;

    for (fa = 0; fa < leng_all; fa++) {
        $('.ul_user')[0].children[0].remove()
    };

    for (i = 0; i < person.length; i++) {
        $(clonv).clone().appendTo($('.ul_user'));

        list_all = Array.from($('.ul_user')[0].children[i].children[0].children);
        list_all[0].innerHTML = i + 1;
        list_all[1].children[1].innerHTML = person[i].name;
        list_all[2].children[1].innerHTML = person[i].password;
        list_all[3].children[1].innerHTML = person[i].status;

        if (person[i].status == 'admin') {
            list_all[4].remove()
            list_all[5].remove()
        }
    };
}
function andin_user() {
    leng_admin = $('.ul_user')[0].children.length;

    for (fa = 0; fa < leng_admin; fa++) {
        $('.ul_user')[0].children[0].remove()
    };

    number_admin = 0;

    for (g = 0; g < person.length; g++) {
        if (person[g].status == 'admin') {
            $(clonv).clone().appendTo($('.ul_user'));

            lisr_admin = Array.from($('.ul_user')[0].children[number_admin].children[0].children);

            lisr_admin[0].innerHTML = number_admin + 1;
            number_admin - 1;
            lisr_admin[1].children[1].innerHTML = person[g].name;
            lisr_admin[2].children[1].innerHTML = person[g].password;
            lisr_admin[3].children[1].innerHTML = person[g].status;
            lisr_admin[5].remove();
            lisr_admin[4].remove();

            number_admin++
        }
    }
};
function moderator_user() {
    leng_moder = $('.ul_user')[0].children.length;

    for (fa = 0; fa < leng_moder; fa++) {
        $('.ul_user')[0].children[0].remove()
    };

    number_moder = 0;

    for (g = 0; g < person.length; g++) {
        if (person[g].status == 'moderator') {
            $(clonv).clone().appendTo($('.ul_user'));

            lisr_moder = Array.from($('.ul_user')[0].children[number_moder].children[0].children);

            lisr_moder[0].innerHTML = number_moder + 1;
            number_moder - 1;
            lisr_moder[1].children[1].innerHTML = person[g].name;
            lisr_moder[2].children[1].innerHTML = person[g].password;
            lisr_moder[3].children[1].innerHTML = person[g].status;

            number_moder++
        }
    }
};

function work_user() {
    leng_work = $('.ul_user')[0].children.length;

    for (fa = 0; fa < leng_work; fa++) {
        $('.ul_user')[0].children[0].remove()
    };

    number_work = 0;

    for (g = 0; g < person.length; g++) {
        if (person[g].status == 'worker') {
            $(clonv).clone().appendTo($('.ul_user'));

            lisr_worker = Array.from($('.ul_user')[0].children[number_work].children[0].children);

            lisr_worker[0].innerHTML = number_work + 1;
            number_work - 1;
            lisr_worker[1].children[1].innerHTML = person[g].name;
            lisr_worker[2].children[1].innerHTML = person[g].password;
            lisr_worker[3].children[1].innerHTML = person[g].status;

            number_work++
        }
    }
};
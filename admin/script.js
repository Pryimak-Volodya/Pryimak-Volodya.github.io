window.onload = function () {
    clonv = $('ul').clone();
    $('.ul_user')[0].children[0].remove()
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
        case 'Модератори':
            moderator_user()
            break
        case 'Працівники':
            work_user()
            break
    }
};

function all_user() {
    for (i = 0; i < person.length; i++) {
        $(clonv).clone().appendTo($('.ul_user'));
        list = Array.from($('.ul_user')[0].children[i].children[0].children);
        list[0].innerHTML = i + 1;
        list[1].children[1].innerHTML = person[i].name;
        list[2].children[1].innerHTML = person[i].password;
        list[3].children[1].innerHTML = person[i].status;
        if (person[i].status == 'admin') {
            list[4].remove()
            list[5].remove()
        }
    }
}
function andin_user() {
    for (i = 0; i < person.length; i++) {
        if (person[i].status == 'admin') {
        }
    }
}
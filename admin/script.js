$($('.edit_user_menu_2')[0]).children().on('click', user_list);
function user_list() {
    switch (this.innerHTML) {
        case 'Всі працівники':
            all_user()
            break
        case 'Адміністратори':
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
let clonv = $('ul').clone();
function all_user() {
    $.ajax({
        url: '../user.json',
        method: 'get',
        async: false,
        dataType: 'html',
        success: function (name) {
            person = JSON.parse(name);
        }
    });
    $(clonv).clone().appendTo($('.ul_user'));
    // list = Array.from($('.ul_user')[0].children[0].children[0].children);
    // list2 = Array.from($('.ul_user')[0].children[1].children[0].children);
}
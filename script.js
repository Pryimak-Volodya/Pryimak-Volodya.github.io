$.ajax({
    url: './user.json',
    method: 'get',
    async: false,
    dataType: 'html',
    success: function (name) {
        person = JSON.parse(name);
    }
});
$('#enter').on('click', authorization);
function authorization() {
    // user entrance
    user_name_entrance = $('#name').val();
    user_password_entrance = $('#password').val()
    user_status_entrance = $('#status').val();

    // user dataBase
    user_dataBase = person;
    // ----------------------- робоча авторизація але статуc працівника через select ------------------------
    // for (i = 0; i < person.length; i++) {
    //     if (user_dataBase[i].name == user_name_entrance && user_dataBase[i].password == user_password_entrance && user_dataBase[i].status == user_status_entrance) {
    //         alert('Увійшов : ' + user_name_entrance + ' - ' + user_status_entrance)
    //         return;
    //     }
    //     else {
    //         alert('Заповни правильно дані');
    //         return;
    //     }
    // }

    // ---------------------- test варіант під теперішню форму
    for (i = 0; i < person.length; i++) {
        if (user_dataBase[i].name == user_name_entrance && user_dataBase[i].password == user_password_entrance) {
            return profile_user();
        }
    }
    return alert('Заповни правильно дані');
}
function profile_user() {
    alert('Увійшов : ' + user_name_entrance + '. Пароль : ' + user_password_entrance)
}

$(dropDown).on("click", function(){
    $(select).slideDown();
});
$(".option").on("click", function(){

$("#status").text($(this).text());


    $(select).slideUp();

});
$(document).ready(function(){
    $('body').css("display", "none").fadeIn(1000);
    var golovna = "index.html";
    var link_chief = "chief/index.html";
    var link_worker = "worker/index.html";
    var link_admin = "admin/index.html";
    var link;

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
   
    user_name_entrance = $('#name').val();
    user_password_entrance = $('#password').val()
    user_status_entrance = $('#status').text();
    options = $("p.option");
    let status_of_user;
    for (var i = 0;i <= options.length; i++)
    {
        if (user_status_entrance == $(options[i]).text()) status_of_user = options[i].id;
    }
    if (status_of_user == "chief") link = link_chief;
    if (status_of_user == "worker") link = link_worker;
    if (status_of_user == "admin") link = link_admin;
    console.log(status_of_user);
    
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
        if (user_dataBase[i].name === user_name_entrance && user_dataBase[i].password === user_password_entrance) {
            return profile_user();
        }
    }
    return alert('Заповни правильно дані');
}
function profile_user() {
  //  alert('Увійшов : ' + user_name_entrance + '. Пароль : ' + user_password_entrance);
    console.log(user_status_entrance);
    $("body").fadeOut(1000, redirect);
    function redirect() {
        $(location).attr('href', link);
    }
}
$('.user_status').on("click", function(){
    $(select).slideDown()
});
$(".option").on("click", function(){

$("#status").text($(this).text());

    $(select).slideUp();
});
});
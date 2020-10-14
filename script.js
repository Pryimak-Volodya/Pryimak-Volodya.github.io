$(document).ready(function () {
    $('body').css("display", "none").fadeIn(1000);
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
    var user_dataBase = person;

    $('#enter').on('click', authorization);
    function authorization() {
        user_name_entrance = $('#name').val();
        user_password_entrance = $('#password').val();
        for (i = 0; i < user_dataBase.length; i++) {
            if (user_dataBase[i].name === user_name_entrance && user_dataBase[i].password === user_password_entrance) {
                if (user_dataBase[i].status === "chief") {
                    link = link_chief
                }
                if (user_dataBase[i].status === "worker") {
                    link = link_worker
                }
                if (user_dataBase[i].status === "admin") {
                    link = link_admin
                }
                onLine = true;
///TEST
                $.ajax({
                    url: "list.php",
                    type: "POST",
                    data: ({name:user_name_entrance, password:user_password_entrance}),
                    success: function(data) {
                        console.log(data);
                    }
                });


                ///
             //  return profile_user();
            }
        }
       return alert('Помилка входу');
    }
    function profile_user() {
        $("body").fadeOut(1000, redirect);
        function redirect() {
            $(location).attr('href', link);
        }
    }

    $('.user_status').on("click", function () {
        $(select).slideDown()
    });
    $(".option").on("click", function () {
        $("#status").text($(this).text());
        $(select).slideUp();
    });

});
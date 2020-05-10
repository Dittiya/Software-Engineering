import * as Cookies from "./cookies.js";

// cookies auth
$(function () {
    var sess_id = Cookies.getCookie("username");

    if (sess_id) {
        console.log(sess_id);
        $('#comm').text(sess_id + ' Community');
        $('#signUp').attr('href', '#default');
        $('#signUp').text('Log Out');
        $('#logIn').attr('href', './profile.html');
        $('#logIn').text('Profile');

        $('#signUp').click(function (e) {
            e.preventDefault();
            Cookies.eraseCookie('username');
            location.reload(true);
        });
    }
});

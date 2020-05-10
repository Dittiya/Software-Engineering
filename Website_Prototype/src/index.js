import * as Cookies from "./cookies.js";

// cookies framework
$(document).ready(function () {
  var sess_id = Cookies.getCookie('username');

  if (sess_id) {
    console.log(sess_id);
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

// change iframe
$(document).ready(function () {
  $('#change1').click(function (e) {
    $('#frame').attr('src', 'org1.html');
    e.preventDefault();
  });
  $('#change2').click(function (e) {
    $('#frame').attr('src', 'org2.html');
    e.preventDefault();
  });
  $('#change3').click(function (e) {
    $('#frame').attr('src', 'org3.html');
    e.preventDefault();
  });
});
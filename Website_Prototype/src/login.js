import * as Cookies from "./cookies.js";

// login auth
var db = new Dexie('user_database');
db.version(3).stores({
    user: 'username,password,org,email'
});
db.open();
var auth = false;
var sess_id = '';

$(document).ready(function () {
    $('#login').click(function () { 
        var id = $('#username').val();
        var pass = $('#password').val();
    
        db.user.get(id, function(query) {
            alert('logged in as ' + query.username);
            Cookies.setCookie('username',id);
        });
    });
});
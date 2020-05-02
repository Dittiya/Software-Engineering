// cookies
// $(document).ready(function () {
//     $('#register').click(function () { 
//         var usernameid = document.getElementById('username').value;
//         sessionStorage.setItem('clicked', 'true');
//         sessionStorage.setItem('username', usernameid);
//     });
// });

// database with Dexie.js API
// and saved to indexedDB
// debug database through chrome dev tool -> Application
var db = new Dexie('user_database');
db.version(1).stores({
    user: 'username,password,org,email'
});
console.log('database loaded');

$(document).ready(function () {
    $('#register').click(function (e) { 
        e.preventDefault();
        var id = $('#username').val();
        var pass = $('#password').val();
        var org = $('#org').val();
        var email = $('#email').val();

        db.user.put({
            username: id,
            password: pass,
            organization: org,
            email: email
        }).then(function () {
            return db.user.get(id);
        }).then(function (user) {
            alert("registered " + id + " from " + org);
        }).catch(function (error) {
            alert(error);
        })
    });
});
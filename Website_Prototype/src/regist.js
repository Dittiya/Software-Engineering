// cookies
$('button[type="button"]').click(function () { 
    var usernameid = document.getElementById('username').value;
    sessionStorage.setItem('clicked', 'true');
    sessionStorage.setItem('username', usernameid);
});
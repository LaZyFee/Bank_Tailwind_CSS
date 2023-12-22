document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'rhr277@gmail.com' && password === '12345') {
        window.location.href = 'serverpage.html';

    } else {
        alert('User not found');
    }
})
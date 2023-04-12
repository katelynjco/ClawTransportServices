const driverLogin = document.getElementById('driver-text');
const loginForm = document.getElementById('login-form');

function toggleLogin() {
  loginForm.style.display = (loginForm.style.display === 'none') ? 'block' : 'none';
}

driverLogin.addEventListener('click', toggleLogin);
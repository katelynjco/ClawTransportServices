const driverLogin = document.getElementById('driver-text');
const loginForm = document.getElementById('login-form');

function toggleLogin() {
  loginForm.style.display = (loginForm.style.display === 'block') ? 'none' : 'block';
}

driverLogin.addEventListener('click', toggleLogin);
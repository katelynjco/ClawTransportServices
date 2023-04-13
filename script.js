const driverLogin = document.getElementById('driver-text');
const loginForm = document.getElementById('login-form');

const formName = document.getElementsByName('Name');
const formEmail = document.getElementsByName('Email');
const formMessage = document.getElementsByName('Message');
const sendMessageBtn = document.getElementById('send-message');

const submissionBanner = document.getElementById('submission-comfirmation');


// driver login form visibility
function toggleLogin() {
  loginForm.style.display = (loginForm.style.display === 'block') ? 'none' : 'block';
}

// contact from submission comfirmation banner
let formSubmitted = false;

function toggleMessageBanner() {
  submissionBanner.style.display = (submissionBanner.style.display === 'none') ? 'flex' : 'none';
}

function submitForm() {
  if (formName !== '' && formEmail !== '' && formMessage !== '') {
    formSubmitted = true;
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function checkRedirect() {
      // Wait for a short delay (e.g., 100ms) to allow the page to redirect
      await delay(100);
      // Check if the current URL matches the redirect URL
      if (window.location.href === 'https://katelynjco.github.io/ClawTransportServices/') {
        toggleMessageBanner();
      } else {

      }
    }
    
    // Call the async function
    checkRedirect();
  }
  }


submissionBanner.addEventListener('click',toggleMessageBanner);
sendMessageBtn.addEventListener('click',submitForm);
driverLogin.addEventListener('click', toggleLogin);
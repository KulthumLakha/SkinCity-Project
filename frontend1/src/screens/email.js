// Get the email address from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

// Check if the email address is valid
if (email) {
  // Display a message to the user
  const message = `Thank you for signing in! Please check your email (${email}) for a link to access your account's home page.`;
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
} else {
  // If the email address is not valid, display an error message
  const error = `Sorry, we could not find your email address. Please try signing in again.`;
  const errorElement = document.createElement('p');
  errorElement.textContent = error;
  document.body.appendChild(errorElement);
}

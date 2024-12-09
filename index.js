document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const date = document.getElementById('date').value.trim();
    const errorMessage = document.getElementById('errorMessage');
  
    // Validate full name for numbers
    if (!fullName) {
      errorMessage.textContent = 'Full name is required.';
      return;
    }
  
    if (/\d/.test(fullName)) {
      alert("Don't use a number in the full name.");
      return;
    }
  
    // Validate email and ensure no numbers are in the Gmail part
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errorMessage.textContent = 'Please enter a valid email.';
      return;
    }
  
    if (/\d/.test(email)) {  // Check for numbers in email
      alert("Please use letters in the Gmail.");
      return;
    }
  
    // Validate password length
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long.';
      return;
    }
  
    // Validate date of birth
    if (!date) {
      errorMessage.textContent = 'Please select your date of birth.';
      return;
    }
  
    // Clear error message and proceed
    errorMessage.textContent = '';
    alert('Form submitted successfully!');
    // Optionally, you can submit the form data to the server here.
  });
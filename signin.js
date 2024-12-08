// signin.js

document.getElementById('signin-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email and password
    if (!email || !password) {
        alert('Please fill out all required fields.');
        return;
    }

    // Send data to backend for authentication
    try {
        const response = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Sign-in successful!');
            localStorage.setItem('token', result.token); // Save JWT token in localStorage
            window.location.href = 'products.html'; // Redirect to the products page
        } else {
            alert(result.message); // Show error message from backend
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        alert('An error occurred. Please try again later.');
    }
});


document.getElementById('signin-form').addEventListener('submit', async function (event) {
    event.preventDefault(); 


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (!email || !password) {
        alert('Please fill out all required fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Sign-in successful!');
            localStorage.setItem('token', result.token); 
            window.location.href = 'products.html'; 
        } else {
            alert(result.message); 
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        alert('An error occurred. Please try again later.');
    }
});

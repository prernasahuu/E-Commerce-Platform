

document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;

    
    if (!email || !password) {
        alert('Please fill out all required fields.');
        return;
    }

    
    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, address })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Sign-up successful!');
            window.location.href = 'signin.html'; 
        } else {
            alert(result.message); 
        }
    } catch (error) {
        console.error('Error during sign-up:', error);
        alert('An error occurred. Please try again later.');
    }
});

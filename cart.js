

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; 

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(itemElement);
        });
    }
}


function addToCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1; 
    } else {
        cart.push({ id: productId, quantity: 1 }); 
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay(); 
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay(); // Refresh cart display
}

document.addEventListener('DOMContentLoaded', updateCartDisplay);

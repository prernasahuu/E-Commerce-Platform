// products.js

async function displayProducts() {
    try {
        const response = await fetch('http://localhost:5000/products');
        const products = await response.json();

        const productContainer = document.querySelector('.product-list');
        productContainer.innerHTML = ''; // Clear existing products

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="assets/images/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('Error fetching products.');
    }
}

// Load products on page load
document.addEventListener('DOMContentLoaded', displayProducts);

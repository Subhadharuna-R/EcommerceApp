// Backend URL
const BACKEND_URL = "http://localhost:1010/api";

// Load products from backend
function loadProducts() {
    fetch(`${BACKEND_URL}/products`)
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("products-container");
            container.innerHTML = "";
            data.forEach(product => {
                let productElement = document.createElement("div");
                productElement.className = "product";
                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                `;
                container.appendChild(productElement);
            });
        })
        .catch(error => console.error("Error loading products:", error));
}

// Load cart items from localStorage
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        let cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Add product to cart
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Remove product from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Clear cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Simple AI Chatbot Responses
function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chatbox = document.getElementById("chatbox");
    let response = "I don't understand.";

    if (input.includes("hello") || input.includes("hi")) {
        response = "Hello! How can I assist you today?";
    } else if (input.includes("price")) {
        response = "You can check the prices of our products in the store!";
    } else if (input.includes("cart")) {
        response = "You can add or remove products from your cart.";
    }

    chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("userInput").value = "";
}

// Load products and cart on page load
document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
    loadCart();
});
// Subscription Functionality
function subscribe() {
    let email = document.getElementById("emailInput").value;
    let subscribeBtn = document.querySelector(".news button");
    let popup = document.getElementById("popup");

    if (email.trim() === "") {
        alert("Please enter a valid email!");
        return;
    }

    // Change button text
    subscribeBtn.innerText = "Subscribed Successfully";
    subscribeBtn.style.backgroundColor = "green"; // Change button color

    // Show Popup
    popup.style.display = "block";

    // Hide popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

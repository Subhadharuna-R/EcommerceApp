document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (category) {
        fetchProducts(category);
    }
});

function fetchProducts(category) {
    fetch(`http://localhost:1010/products/category/${category}`)
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error("Error fetching products:", error));
}

function displayProducts(products) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    if (products.length === 0) {
        productContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;

        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    console.log("Added product to cart:", productId);
    // Implement cart functionality
}

function removeFromCart(productId) {
    console.log("Removed product from cart:", productId);
    // Implement remove from cart functionality
}

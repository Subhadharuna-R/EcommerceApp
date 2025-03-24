document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.querySelector(".checkout-btn");

    function renderCart() {
        cartTableBody.innerHTML = "";
        let total = 0;

        cartItems.forEach((item, index) => {
            // Ensure price and quantity are numbers
            let price = parseFloat(item.price) || 0;
            let quantity = parseInt(item.quantity) || 1;
            let itemTotal = price * quantity;
            total += itemTotal;

            let row = `
                <tr>
                    <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto; border-radius: 5px;"></td>
                    <td>${item.name}</td>
                    <td>$${price.toFixed(2)}</td>
                    <td>
                        <input type="number" value="${quantity}" min="1" class="quantity-input" data-index="${index}">
                    </td>
                    <td>$${itemTotal.toFixed(2)}</td>
                    <td><button class="remove-btn" onclick="removeFromCart(${index})">X</button></td>
                </tr>
            `;
            cartTableBody.innerHTML += row;
        });

        totalPriceEl.innerText = `$${total.toFixed(2)}`;
        attachQuantityChangeListeners();
    }

    function removeFromCart(index) {
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCart();
    }

    function attachQuantityChangeListeners() {
        document.querySelectorAll(".quantity-input").forEach(input => {
            input.addEventListener("change", function () {
                let index = this.getAttribute("data-index");
                let newQuantity = parseInt(this.value);
                if (newQuantity < 1) newQuantity = 1; // Prevent zero or negative quantity
                cartItems[index].quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(cartItems));
                renderCart();
            });
        });
    }

    checkoutBtn.addEventListener("click", function () {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Proceeding to checkout!");
            // Redirect to checkout page (You can replace 'checkout.html' with your actual checkout page)
            window.location.href = "checkout.html";
        }
    });

    window.removeFromCart = removeFromCart;
    renderCart();
});
document.getElementById("checkout-btn").addEventListener("click", function () {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");

        // Save orders in localStorage for checkout page
        localStorage.setItem("orders", JSON.stringify(cartItems));
        
        // Clear cart after purchase
        localStorage.removeItem("cart");

        // Reload page to show empty cart
        window.location.href = "checkout.html";
    }
});

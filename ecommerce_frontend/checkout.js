document.addEventListener("DOMContentLoaded", function () {
    let ordersContainer = document.getElementById("orders-container");

    // Retrieve and clean orders from localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders = removeDuplicateOrders(orders);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Get shipping address from localStorage
    let shippingAddress = localStorage.getItem("shippingAddress") || "Not Provided";

    // If no orders exist
    if (orders.length === 0) {
        ordersContainer.innerHTML = "<p>No orders placed yet.</p>";
        return;
    }

    // Display orders
    orders.forEach((order, index) => {
        let quantity = order.quantity || 1;
        let totalPrice = (order.price * quantity).toFixed(2);

        let orderDiv = document.createElement("div");
        orderDiv.classList.add("order-item");

        orderDiv.innerHTML = `
            <h3>${order.name}</h3>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Price:</strong> $${totalPrice}</p>
            <p><strong>Shipping Address:</strong> ${shippingAddress}</p>

            <div class="shipping-status">
                <p class="status-text">Not Yet Shipped</p>
            </div>

            <button class="cancel-order" data-index="${index}">Cancel Order</button>
        `;

        ordersContainer.appendChild(orderDiv);
    });

    // Add event listeners for cancel buttons
    document.querySelectorAll(".cancel-order").forEach(button => {
        button.addEventListener("click", function () {
            let orderIndex = this.getAttribute("data-index");
            cancelOrder(orderIndex);
        });
    });
});

// Remove duplicate orders based on name, price, and quantity
function removeDuplicateOrders(orders) {
    let uniqueOrders = [];
    let seen = new Set();

    orders.forEach(order => {
        let orderKey = `${order.name}-${order.price}-${order.quantity}`;
        if (!seen.has(orderKey)) {
            seen.add(orderKey);
            uniqueOrders.push(order);
        }
    });

    return uniqueOrders;
}

// Cancel order function
function cancelOrder(index) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();
}

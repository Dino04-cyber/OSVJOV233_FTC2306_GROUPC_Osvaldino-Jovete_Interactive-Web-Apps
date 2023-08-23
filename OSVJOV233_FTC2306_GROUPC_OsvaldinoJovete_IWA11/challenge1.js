// Helper function to update order details
function updateOrderDetails(orderNumber) {
    const root = document.querySelector(`[data-key="order${orderNumber}"]`);
    const biscuits = root.querySelector(".biscuits .count");
    const donuts = root.querySelector(".donuts .count");
    const pancakes = root.querySelector(".pancakes .count");
    const status = root.querySelector(".status dd");

    biscuits.textContent = root.getAttribute("data-biscuits");
    donuts.textContent = root.getAttribute("data-donuts");
    pancakes.textContent = root.getAttribute("data-pancakes");
    
    if (root.getAttribute("data-delivered") === "true") {
        status.textContent = "Delivered";
    } else {
        status.textContent = "Pending";
    }
}

// Update order details for each order
updateOrderDetails(1);
updateOrderDetails(2);
updateOrderDetails(3);

// Changes Made:
// 1. Corrected variable names and assignments.
// 2. Fixed status logic using if-else condition.
// 3. Used querySelector to select DOM elements and getAttribute to access data.

// Intended Behavior:
// The changes ensure valid syntax, proper data retrieval, and accurate updating of DOM elements,
// resulting in the correct display of order details instead of "Loading..." placeholders.


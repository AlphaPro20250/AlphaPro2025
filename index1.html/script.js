let cart = [];
let total = 0;

// Function to add an item to the cart
function orderNow(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
    showNotification(`${item} added to cart!`);
}

// Function to update the cart display
function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    // Clear previous list items
    cartList.innerHTML = "";

    // Add new cart items
    cart.forEach((food, index) => {
        let li = document.createElement("li");
        li.textContent = `${food.item} - $${food.price.toFixed(2)}`;

        // Add remove button for each item
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = () => removeItem(index);
        
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });

    // Update total price
    totalPrice.textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
    showNotification("Item removed from cart.");
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add items before checking out.");
        return;
    }

    alert(`Thank you for your order! Total: $${total.toFixed(2)}`);
    
    // Reset cart
    cart = [];
    total = 0;
    updateCart();
}

// Function to show notifications
function showNotification(message) {
    let notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

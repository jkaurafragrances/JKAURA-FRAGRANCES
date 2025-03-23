document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let name = button.getAttribute("data-name");
            let price = parseFloat(button.getAttribute("data-price"));
            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        let cartItems = document.querySelector(".cart-items");
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            let div = document.createElement("div");
            div.textContent = ${item.name} - $${item.price};
            cartItems.appendChild(div);
        });
    }

    document.getElementById("order-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
    });
});

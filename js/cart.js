document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElement.textContent = total.toFixed(2);
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateTotal();
  }

  function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalElement.textContent = "0";
      return;
    }

    cart.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("cart-item");

      card.innerHTML = `
        <img src="${item.image || 'images/default.jpg'}" alt="${item.title || 'Course'}" onerror="this.src='images/default.jpg'" />
        <div class="cart-details">
          <h4>${item.title || 'Untitled Course'}</h4>
          <p>Color: ${item.color || 'Default'}</p>
          <p>Price: S/ ${item.price}</p>
          <label>Quantity:
            <input type="number" min="1" value="${item.quantity}" data-index="${index}" />
          </label>
          <button class="remove-btn" data-index="${index}">🗑️ Remove</button>
        </div>
      `;

      cartContainer.appendChild(card);
    });

    // Handle quantity change
    document.querySelectorAll("input[type='number']").forEach(input => {
      input.addEventListener("change", (e) => {
        const index = e.target.dataset.index;
        const newQuantity = parseInt(e.target.value);
        if (newQuantity > 0) {
          cart[index].quantity = newQuantity;
          saveCart();
        }
      });
    });

    // Handle remove
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        saveCart();
        renderCart();
      });
    });

    updateTotal();
  }

  renderCart();
});

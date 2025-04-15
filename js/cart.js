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
          <img src="${item.image}" alt="${item.title}" />
          <div class="cart-details">
            <h4>${item.title}</h4>
            <p>Color: ${item.color}</p>
            <p>Price: S/ ${item.price}</p>
            <label>Quantity:
              <input type="number" min="1" value="${item.quantity}" data-index="${index}" />
            </label>
            <button class="remove-btn" data-index="${index}">🗑️ Remove</button>
          </div>
        `;
  
        cartContainer.appendChild(card);
      });
  
      // Handle quantity changes
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
  
      // Handle remove button
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
  

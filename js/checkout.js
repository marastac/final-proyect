document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  const confirmation = document.getElementById("confirmation");
  const loader = document.getElementById("loader");
  const totalAmount = document.getElementById("total-amount");
  const orderSummary = document.getElementById("order-summary");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Redirect if cart is empty
  if (cart.length === 0) {
    alert("Your cart is empty. Please add some products.");
    window.location.href = "../courses/course.html";
    return;
  }

  // Display summary and total
  let total = 0;
  cart.forEach(item => {
    const quantity = item.quantity || 1;
    const subtotal = item.price * quantity;
    total += subtotal;

    const line = document.createElement("p");
    line.textContent = `${item.title} (${item.color || 'default'}) x${quantity} — S/ ${subtotal.toFixed(2)}`;
    orderSummary.appendChild(line);
  });

  totalAmount.textContent = `S/ ${total.toFixed(2)}`;

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loader.classList.remove("hidden");

    setTimeout(() => {
      loader.classList.add("hidden");
      form.classList.add("hidden");
      confirmation.classList.remove("hidden");

      if (typeof confetti === "function") confetti();

      localStorage.removeItem("cart");
    }, 1500);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-items");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function saveWishlist() {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  
    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    function renderWishlist() {
      wishlistContainer.innerHTML = "";
  
      if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
        return;
      }
  
      wishlist.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("wishlist-item");
  
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <div class="wishlist-details">
            <h4>${item.title}</h4>
            <p>Price: S/ ${item.price}</p>
            <button class="btn secondary" data-index="${index}" data-action="add">Add to Cart</button>
            <button class="btn remove-btn" data-index="${index}" data-action="remove">Remove</button>
          </div>
        `;
  
        wishlistContainer.appendChild(card);
      });
  
      // Buttons
      document.querySelectorAll(".wishlist-details button").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const action = e.target.dataset.action;
          const index = parseInt(e.target.dataset.index);
          const product = wishlist[index];
  
          if (action === "remove") {
            wishlist.splice(index, 1);
            saveWishlist();
            renderWishlist();
          }
  
          if (action === "add") {
            const exists = cart.find(c => c.id === product.id && c.color === product.color);
            if (exists) {
              exists.quantity += 1;
            } else {
              cart.push({ ...product, quantity: 1 });
            }
            saveCart();
            animateCartIcon();
            alert("✅ Item added to cart!");
          }
        });
      });
    }
  
    renderWishlist();
  });
  

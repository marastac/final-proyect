document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");
  
    // Simulated data (can be replaced with fetch)
    const courses = [
      {
        id: "curso001",
        title: "Intro to Artificial Intelligence",
        description: "Learn the basics of AI, machine learning and neural networks.",
        price: 120,
        discount: 20,
        images: [
          "../images/cursos/ia-intro.webp",
          "../images/cursos/ia-preview1.webp",
          "../images/cursos/ia-preview2.webp"
        ],
        colors: ["Blue", "Black", "Silver"]
      }
    ];
  
    const course = courses.find(c => c.id === courseId);
    if (!course) {
      alert("Course not found.");
      return;
    }
  
    // Fill course data
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-description").textContent = course.description;
  
    const priceElement = document.getElementById("course-price");
    const discountFlag = document.getElementById("discount-flag");
  
    if (course.discount) {
      const discounted = (course.price * (1 - course.discount / 100)).toFixed(2);
      priceElement.textContent = `S/ ${discounted}`;
      discountFlag.textContent = `-${course.discount}%`;
    } else {
      priceElement.textContent = `S/ ${course.price}`;
      discountFlag.style.display = "none";
    }
  
    // Carousel
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.getElementById("image-thumbnails");
    mainImage.src = course.images[0];
  
    course.images.forEach(img => {
      const thumb = document.createElement("img");
      thumb.src = img;
      thumb.classList.add("thumbnail");
      thumb.addEventListener("click", () => {
        mainImage.src = img;
      });
      thumbnails.appendChild(thumb);
    });
  
    // Colors
    const colorList = document.getElementById("color-list");
    course.colors.forEach(color => {
      const btn = document.createElement("button");
      btn.textContent = color;
      btn.classList.add("color-btn");
      btn.addEventListener("click", () => {
        document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
      colorList.appendChild(btn);
    });
  
    // Add to cart
    document.getElementById("add-to-cart").addEventListener("click", () => {
      const quantity = parseInt(document.getElementById("quantity").value);
      const selectedColor = document.querySelector(".color-btn.selected")?.textContent || "Default";
      if (quantity < 1) return alert("Please select a valid quantity.");
  
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(p => p.id === course.id && p.color === selectedColor);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({
          id: course.id,
          title: course.title,
          price: course.price,
          image: course.images[0],
          color: selectedColor,
          quantity: quantity
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      animateCartIcon();
      alert("🛒 Course added to cart!");
    });
  
    // Add to wishlist
    document.getElementById("add-to-wishlist").addEventListener("click", () => {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
      const product = {
        id: course.id,
        title: course.title,
        price: course.price,
        color: document.querySelector(".color-btn.selected")?.textContent || "Default",
        image: course.images[0]
      };
  
      const exists = wishlist.find(w => w.id === product.id && w.color === product.color);
      if (!exists) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`❤️ ${course.title} added to your wishlist.`);
      } else {
        alert("This course is already in your wishlist.");
      }
    });
  });
  

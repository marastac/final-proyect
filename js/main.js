document.addEventListener("DOMContentLoaded", () => {
    // === Show welcome modal once ===
    const modal = document.getElementById("gift-modal");
    const closeModal = document.querySelector(".close-modal");
  
    if (!localStorage.getItem("visited")) {
      modal.classList.remove("hidden");
      localStorage.setItem("visited", "true");
    }
  
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    }
  
    // === Newsletter Signup ===
    const newsletterForm = document.getElementById("newsletter-form");
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector("input[type='email']");
        const email = emailInput.value.trim().toLowerCase();
  
        if (!email.includes("@") || !email.includes(".")) {
          alert("❌ Please enter a valid email address.");
          return;
        }
  
        let subscribers = JSON.parse(localStorage.getItem("newsletter")) || [];
  
        if (subscribers.includes(email)) {
          alert("⚠️ You're already subscribed.");
          return;
        }
  
        subscribers.push(email);
        localStorage.setItem("newsletter", JSON.stringify(subscribers));
  
        alert("✅ You're now subscribed!");
        newsletterForm.reset();
      });
    }
  
    // === Load featured courses from JSON ===
    const courseList = document.getElementById("course-list");
  
    if (courseList) {
      fetch("json/cursos.json")
        .then(res => res.json())
        .then(data => {
          courseList.innerHTML = "";
  
          data.forEach(course => {
            const card = document.createElement("div");
            card.classList.add("course-card");
  
            card.innerHTML = `
              <img src="${course.imagen}" alt="${course.titulo}" />
              <h4>${course.titulo}</h4>
              <p>${course.descripcion.slice(0, 70)}...</p>
              <p><strong>S/ ${course.precio}</strong></p>
              <a href="courses/course.html?id=${course.id}" class="btn">View</a>
            `;
  
            courseList.appendChild(card);
          });
        })
        .catch(err => {
          console.error("Error loading courses:", err);
          courseList.innerHTML = "<p>⚠️ Unable to load courses. Please try again later.</p>";
        });
    }
  });
  
  // === Optional: Animate cart icon on item add ===
  function animateCartIcon() {
    const cartIcon = document.getElementById("cart-icon");
    if (!cartIcon) return;
  
    cartIcon.classList.add("shake");
    setTimeout(() => cartIcon.classList.remove("shake"), 600);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  });

  // Hide loader when page fully loads
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  });
  
  
  

document.addEventListener("DOMContentLoaded", () => {
  // === Welcome modal ===
  const modal = document.getElementById("gift-modal");
  const closeModal = document.querySelector(".close-modal");

  if (!localStorage.getItem("visited")) {
    modal?.classList.remove("hidden");
    localStorage.setItem("visited", "true");
  }

  closeModal?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // === Newsletter signup ===
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

  // === Load featured courses ===
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
            <img src="${course.imagen}" alt="${course.titulo}" onerror="this.src='images/default.jpg'" />
            <h4>${course.titulo}</h4>
            <p>${course.descripcion.slice(0, 70)}...</p>
            <p><strong>S/ ${course.precio}</strong></p>
            <a href="../courses/courseDetail.html?id=${course.id}" class="btn">View</a>
          `;

          courseList.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Error loading courses:", err);
        courseList.innerHTML = "<p>⚠️ Unable to load courses. Please try again later.</p>";
      });
  }

  // === Hamburger menu ===
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// === Optional: Animate cart icon ===
function animateCartIcon() {
  const cartIcon = document.getElementById("cart-icon");
  if (!cartIcon) return;

  cartIcon.classList.add("shake");
  setTimeout(() => cartIcon.classList.remove("shake"), 600);
}

// === Loader ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

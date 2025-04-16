// course.js - Improved dynamic version (full features retained)

const courseId = new URLSearchParams(window.location.search).get("id");

async function fetchCourseData() {
  try {
    const res = await fetch("../json/cursos.json");
    const cursos = await res.json();
    const curso = cursos.find(c => c.id === courseId);

    if (!curso) {
      document.querySelector(".course-detail").innerHTML = `<p>Course not found.</p>`;
      return;
    }

    renderCourse(curso);
  } catch (err) {
    console.error("Error loading course:", err);
  }
}

function renderCourse(course) {
  const courseDetail = document.querySelector(".course-detail");

  const images = [
    `../${course.imagen}`,
    `../${course.imagen}`,
    `../${course.imagen}`
  ];

  courseDetail.innerHTML = `
    <section class="course-box">
      <div class="gallery">
        <div class="main-image">
          <img id="mainImage" src="${images[0]}" alt="${course.titulo}" />
        </div>
        <div class="thumbnails">
          ${images.map(img => `<img src="${img}" onclick="document.getElementById('mainImage').src='${img}'" />`).join('')}
        </div>
      </div>
      <div class="info">
        <h2>${course.titulo}</h2>
        <p class="price">S/ ${course.precio} <span class="discount-flag">20% OFF</span></p>
        <p class="description">${course.descripcion}</p>

        <div class="options">
          <label for="color">Choose a color:</label>
          <select id="color">
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="green">Green</option>
          </select>
        </div>

        <div class="quantity">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" value="1" />
        </div>

        <div class="actions">
          <button class="btn primary" onclick="addToCart('${course.id}')">Add to Cart</button>
          <button class="btn secondary" onclick="addToWishlist('${course.id}')">Add to Wishlist</button>
        </div>
      </div>
    </section>
  `;
}

function addToCart(courseId) {
  const quantity = parseInt(document.getElementById("quantity").value);
  const color = document.getElementById("color").value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find(item => item.id === courseId && item.color === color);

  if (exists) {
    exists.quantity += quantity;
  } else {
    cart.push({ id: courseId, quantity, color });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Course added to cart!");
}

function addToWishlist(courseId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (!wishlist.includes(courseId)) {
    wishlist.push(courseId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to your wishlist!");
  } else {
    alert("This course is already in your wishlist.");
  }
}

fetchCourseData();

window.addEventListener("DOMContentLoaded", async () => {
  // Hide loader
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  // Simulated user name
  const userName = "Daniela Torres";
  const usernameSpan = document.getElementById("username");
  if (usernameSpan) usernameSpan.textContent = userName;

  // Load courses dynamically from cursos.json
  const courseContainer = document.getElementById("my-courses");

  try {
    const res = await fetch("../json/cursos.json");
    const courses = await res.json();

    courses.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");

      card.innerHTML = `
        <img src="../${course.imagen}" alt="${course.titulo}" onerror="this.src='../images/placeholder.jpg'" />
        <h4>${course.titulo}</h4>
        <p>Progress: ${Math.floor(Math.random() * 100)}%</p>
        <p>⭐ ${(Math.random() * 2 + 3).toFixed(1)} / 5</p>
        <a href="../courses/courseDetail.html?id=${course.id}" class="btn secondary">Continue</a>
      `;

      courseContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading courses for dashboard:", err);
    courseContainer.innerHTML = "<p>⚠️ Unable to load your courses. Please try again later.</p>";
  }

  // Logout handler
  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("authToken");
      window.location.href = "../index.html";
    });
  }
});

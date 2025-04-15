window.addEventListener("DOMContentLoaded", () => {
  // Ocultar loader
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  // Simulated user data
  const userData = {
    name: "Alex Johnson",
    courses: [
      {
        id: "curso001",
        title: "Intro to Artificial Intelligence",
        image: "../images/cursos/ia-intro.webp",
        progress: 75,
        rating: 4.5
      },
      {
        id: "curso003",
        title: "Personal Development & Productivity",
        image: "../images/cursos/productividad.webp",
        progress: 40,
        rating: 5
      }
    ]
  };

  // Mostrar nombre
  const usernameSpan = document.getElementById("username");
  if (usernameSpan) {
    usernameSpan.textContent = userData.name;
  }

  // Mostrar cursos
  const courseContainer = document.getElementById("my-courses");
  if (courseContainer) {
    userData.courses.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");

      card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" onerror="this.src='../images/placeholder.jpg'" />
        <h4>${course.title}</h4>
        <p>Progress: ${course.progress}%</p>
        <p>⭐ ${course.rating} / 5</p>
        <a href="../courses/course.html?id=${course.id}" class="btn secondary">Continue</a>
      `;

      courseContainer.appendChild(card);
    });
  }

  // Logout
  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("authToken");
      window.location.href = "../index.html";
    });
  }
});

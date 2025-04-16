document.addEventListener("DOMContentLoaded", () => {
    const authLink = document.getElementById("auth-link");
  
    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username") || "User";
  
    if (authLink) {
      if (token) {
        authLink.textContent = "Logout";
        authLink.href = "#";
        authLink.addEventListener("click", (e) => {
          e.preventDefault();
          const confirmLogout = confirm("Are you sure you want to log out?");
          if (confirmLogout) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("username");
            location.href = "../index.html";
          }
        });
      } else {
        authLink.textContent = "Login";
        authLink.href = "../auth/login.html";
      }
    }
  });
  
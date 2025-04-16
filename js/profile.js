document.addEventListener("DOMContentLoaded", () => {
    const usernameEl = document.getElementById("username");
    const emailEl = document.getElementById("email");
    const avatarEl = document.getElementById("avatar");
    const logoutBtn = document.getElementById("logout");
  
    // Load user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
  
    // If no user, redirect to login
    if (!user) {
      alert("Session expired. Please login again.");
      window.location.href = "../auth/login.html";
      return;
    }
  
    // Display user info
    usernameEl.textContent = user.name;
    emailEl.textContent = user.email;
    avatarEl.src = user.avatar || "../images/default-avatar.png";
    avatarEl.alt = user.name;
  
    // Logout function
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("You have been logged out.");
      window.location.href = "../auth/login.html";
    });
  });
  
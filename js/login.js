document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }
  
      // Simulate login success (replace with real auth call later)
      const token = "fake-jwt-token";
      localStorage.setItem("authToken", token);
      alert("✅ Login successful!");
      window.location.href = "../dashboard/index.html";
    });
  });
  

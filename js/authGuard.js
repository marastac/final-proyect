document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("authToken");
  
    // Define public pages (that don't need protection)
    const publicPages = [
      "/index.html",
      "/home/index.html",
      "/auth/login.html",
      "/auth/register.html",
      "/courses/index.html",
      "/courses/course.html",
      "/ai-course/ai-course.html"
    ];
  
    const path = window.location.pathname;
  
    const isPublic = publicPages.some(publicPath => path.endsWith(publicPath));
    const isProtected = !isPublic;
  
    if (isProtected && !token) {
      alert("⚠️ You must be logged in to view this page.");
      window.location.href = "../auth/login.html";
    }
  });
  

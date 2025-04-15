document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbContainer = document.querySelector(".breadcrumbs");
    if (!breadcrumbContainer) return;
  
    const path = window.location.pathname.split("/").filter(Boolean);
    const labels = {
      "index.html": "Home",
      "login.html": "Login",
      "register.html": "Register",
      "dashboard": "Dashboard",
      "wishlist": "Wishlist",
      "cart": "Cart",
      "checkout": "Checkout",
      "ai-course.html": "AI Generator",
      "course.html": "Course Details",
      "courses": "Courses"
    };
  
    let html = `<a href="../index.html">Home</a>`;
  
    for (let i = 0; i < path.length; i++) {
      const segment = path[i];
      const label = labels[segment] || segment.replace(".html", "").replace("-", " ").toUpperCase();
      const isLast = i === path.length - 1;
  
      if (!isLast) {
        html += ` &gt; <a href="#">${label}</a>`;
      } else {
        html += ` &gt; <span>${label}</span>`;
      }
    }
  
    breadcrumbContainer.innerHTML = html;
  });
  
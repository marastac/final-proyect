document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const avatar = document.getElementById("avatar").files[0];
  
      if (!name || !email || !address) {
        alert("Please fill out all required fields.");
        return;
      }
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("avatar", avatar);
  
      // Simulated registration
      alert("✅ Registration successful! You can now log in.");
      window.location.href = "./login.html";
    });
  
    // Optional: avatar preview
    const avatarInput = document.getElementById("avatar");
    avatarInput.addEventListener("change", () => {
      const file = avatarInput.files[0];
      if (file) {
        const preview = document.createElement("img");
        preview.src = URL.createObjectURL(file);
        preview.style.width = "80px";
        preview.style.borderRadius = "50%";
        preview.style.marginTop = "10px";
        form.appendChild(preview);
      }
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Mostrar loader
      const loader = document.getElementById("loader");
      if (loader) loader.style.display = "flex";
  
      // Simular proceso de pago
      setTimeout(() => {
        // Ocultar el formulario
        form.classList.add("hidden");
  
        // Mostrar confirmación de pago
        confirmation.classList.remove("hidden");
  
        // Ocultar loader
        if (loader) loader.style.display = "none";
  
        // Limpiar carrito
        localStorage.removeItem("cart");
      }, 1500); // 1.5 segundos simulados de carga
    });
  });
  
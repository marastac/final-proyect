document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("ai-form");
    const outputSection = document.getElementById("ai-output");
    const titleContainer = document.getElementById("course-title");
    const outlineContainer = document.getElementById("course-outline");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const idea = document.getElementById("idea").value.trim();
      if (!idea) return alert("Please describe your course idea.");
  
      // Mostrar loader
      document.getElementById("loader").style.display = "flex";
  
      const prompt = `
  You're an expert online course designer.
  Given the idea: "${idea}"
  Generate a course title and a list of 6-8 modules with lesson names.
  Respond in JSON format like:
  {
    "title": "...",
    "modules": ["Module 1: ...", "Module 2: ..."]
  }
  `;
  
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_OPENAI_API_KEY"
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
          })
        });
  
        const data = await res.json();
        const response = data.choices[0].message.content;
  
        const parsed = JSON.parse(response);
        titleContainer.textContent = parsed.title;
        outlineContainer.innerHTML = "";
  
        parsed.modules.forEach(mod => {
          const li = document.createElement("li");
          li.textContent = mod;
          outlineContainer.appendChild(li);
        });
  
        outputSection.classList.remove("hidden");
  
      } catch (err) {
        console.error(err);
        alert("❌ Error generating course. Please try again.");
      }
  
      // Ocultar loader
      document.getElementById("loader").style.display = "none";
    });
  });
  
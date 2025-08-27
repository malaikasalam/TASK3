// Dark / Light theme toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");

  const toggleBtn = document.querySelector(".theme-toggle");
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
}

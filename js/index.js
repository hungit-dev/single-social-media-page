const theme = document.querySelector("html[data-bs-theme]");

const toggleThemeBtn = document.querySelector("header nav i");
toggleThemeBtn.addEventListener("click", () => {
  if (toggleThemeBtn.classList.contains("bi-sun")) {
    toggleThemeBtn.classList.remove("bi-sun");
    toggleThemeBtn.classList.add("bi-moon");
    theme.setAttribute("data-bs-theme", "dark");
  } else {
    toggleThemeBtn.classList.remove("bi-moon");
    toggleThemeBtn.classList.add("bi-sun");
    theme.setAttribute("data-bs-theme", "light");
  }
});

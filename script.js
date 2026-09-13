let state = JSON.parse(sessionStorage.getItem("darkMode"))
function darkmode() {
  if (state) {
    document.body.id = "dark-mode";
  }
  else {
    document.body.removeAttribute("id");
  }
  sessionStorage.setItem("darkMode", JSON.stringify(state));
}

darkmode();

if (darkModeButton != null) {
  darkModeButton.addEventListener("click", () => {
    state = !state
    darkmode();
  });
}

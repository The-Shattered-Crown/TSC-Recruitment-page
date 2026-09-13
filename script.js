const darkModeButton = document.getElementById("darkmode-button")
const body = document.body
let state = JSON.parse(sessionStorage.getItem("darkMode"))
function darkmode() {
  if (state) {
    body.id = ("dark-mode");
  }
  else {
    body.removeAttribute("id");
  }
  sessionStorage.setItem("darkMode", JSON.stringify(state));
}

darkmode();

if (darkModeButton != null) {
  darkModeButton.addEventListener("click", () => {
    state = !state;
    darkmode();
  });
}

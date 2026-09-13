const darkModeButton = document.getElementById("darkmode-button");
let state = sessionStorage.getItem("darkMode") == "true";

function darkmode() {
  if (state) {
    document.body.removeAttribute("id");
  } else {
    document.body.id = "dark-mode";
  }
  sessionStorage.setItem("darkMode", state);
}

darkmode();

if (darkModeButton != null) {
  darkModeButton.addEventListener("click", () => {
    state = !state;
    darkmode();
  });
}

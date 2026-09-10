const darkModeButton = document.getElementById("darkmode-button");
darkModeButton.addEventListener("click", () => {
  if (document.body.id === "dark-mode") {
    document.body.removeAttribute("id");
  }
  else {
    document.body.id = "dark-mode";
  }
})

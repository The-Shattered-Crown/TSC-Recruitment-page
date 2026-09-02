const form = document.querySelector("form");
const checkbox = form.querySelector("input[type='checkbox']");
const submit = form.querySelector("button[type='submit']");
form.addEventListener("input", (event) => {
  event.preventDefault();
  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const experience = document.getElementById("exp").value;
  if (name && email && experience && checkbox.checked) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }
});
if (submit.disabled == true) {
   submit.title = "Please fill all fields and accept the terms to submit";
}

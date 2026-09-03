const form = document.querySelector("form");
const checkbox = form.querySelector("input[type='checkbox']");
const submit = form.querySelector("button[type='submit']");
const Name = form.querySelector("[name='name']");
const email = form.querySelector("[name='email']");
const experience = form.querySelector("[name='experience']");
Name.placeholder = "Enter Name";
email.placeholder = "Enter Email";
experience.placeholder = "Describe your experience so far";
form.addEventListener("input", (event) => {
  event.preventDefault();
  if (Name.value && email.validity.valid && experience.value && checkbox.checked) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }
});
if (submit.disabled == true) {
   submit.title = "Please fill all fields and accept the terms to submit";
}

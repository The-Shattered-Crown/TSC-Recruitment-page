const form = document.querySelector("form");
const checkbox = form.querySelector("input[type='checkbox']");
const submit = form.querySelector("button[type='submit']");

checkbox.addEventListener("change" , () => {
    if(checkbox.checked == true){
        submit.disabled = false;
    }
    else {
      submit.disabled = true;
    }
});

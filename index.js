let checkbox = document.getElementById("checkbox");

let button = document.getElementById("submitbtn");

checkbox.addEventListener("change" , () => {
    if(checkbox.checked == true){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
});
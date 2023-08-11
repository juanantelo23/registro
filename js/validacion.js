const botonRegistro = document.getElementById("regBtn");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var requiredFields = document.getElementsByClassName("form-control");
var checkpoint = document.getElementById("terminos");

botonRegistro.addEventListener("click", function validateForm(event){
    event.preventDefault()
    if(password1.value.length < 6 || password1.value !== password2.value || hasEmptyField() || !checkpoint.checked)  {
      password2.setCustomValidity(showAlertError());
    } else {
      password2.setCustomValidity(showAlertSuccess());
    }
  }
)
function hasEmptyField() {
    for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === "") {
            return true; // Found an empty field
        }
    }
    return false; // All required fields are filled
}
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    setTimeout(function () {
      document.getElementById("alert-success").classList.remove("show");
    }, 3000);
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(function () {
        document.getElementById("alert-danger").classList.remove("show");
      }, 3000);
}

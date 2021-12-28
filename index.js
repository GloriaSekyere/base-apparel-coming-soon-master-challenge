let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
let email = document.getElementById("email");
let form = document.querySelector(".email");



form.onsubmit = () => {
  if (email.value.match(pattern)) {
    alert("yes");
  }
  else {
    document.querySelector(".email__submit").style.right = "-30px";
    document.querySelector(".validation-text").style.opacity = "1";
    email.focus();
  }
}
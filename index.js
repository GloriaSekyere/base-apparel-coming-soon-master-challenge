let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
let email = document.getElementById("email");
let form = document.querySelector(".email");
let button = document.querySelector(".email__submit");


button.onclick = (event) => {
  event.preventDefault;
  if (email.value.match(pattern)) {
    alert("yes");
  }
  else {
    button.style.right = "-30px";
    document.querySelector(".validation-text").style.opacity = "1";
    email.focus();
  }
}
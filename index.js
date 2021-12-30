let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

let form = document.querySelector(".email");
let email = document.querySelector(".email__field");
let button = document.querySelector(".email__submit");


button.onclick = (event) => {
  event.preventDefault();
  if (email.value.match(pattern)) {
    alert("yes");
  }
  else {
    button.style.right = "-27px";
    document.querySelector(".validation-text").style.opacity = "1";
    email.focus();
  }
}
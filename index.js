let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
let form = document.querySelector(".email");
let email = document.querySelector(".email__field");
let button = document.querySelector(".email__submit");

button.onclick = (event) => {
  
  // Prevent page refresh on form submission
  event.preventDefault();

  // Check if email matches pattern
  if (email.value.match(pattern)) {
    button.style.right = "0";
    document.querySelector(".validation-text").style.opacity = "0";
    email.value = "";
  }

  // Show error when email doesn't match pattern
  else {
    button.style.right = "-27px";
    document.querySelector(".validation-text").style.opacity = "1";
    email.focus();
  }
  
}

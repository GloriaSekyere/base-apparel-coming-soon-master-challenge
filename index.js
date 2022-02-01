// Variable declarations 
const mediaQuery = window.matchMedia("(min-width: 1280px)")
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
let form = document.querySelector(".email");
let email = document.querySelector(".email__field");
let button = document.querySelector(".email__submit");
let error = document.querySelector(".email__error");
let validationText = document.querySelector(".validation-text");


button.onclick = (event) => {
  
  // Prevent page refresh on form submission
  event.preventDefault();

  // If screen size is 1280px and above
  if (mediaQuery.matches) {

    // Check if email matches regex pattern
    if (email.value.match(pattern)) {
      button.style.right = "0";
      error.style.right = "75px";
      validationText.style.display = "none";
      email.value = "";
    }

    // Show error when email doesn't match pattern
    else {
      button.style.right = "-27px";
      error.style.right = "85px";
      validationText.style.display = "block";
      email.focus();
    }
  } 

  // If screen size is below 1280px
  else {

    // Check if email matches regex pattern
    if (email.value.match(pattern)) {
      button.style.right = "0";
      validationText.style.display = "none";
      email.value = "";
    }

    // Show error when email doesn't match pattern
    else {
      button.style.right = "-27px";
      validationText.style.display = "block";
      email.focus();
    }
  }

}



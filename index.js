// Variable declarations 
const mediaQuery = window.matchMedia("(min-width: 1280px)")
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
let form = document.querySelector(".email");
let email = document.querySelector(".email__field");
let button = document.querySelector(".email__submit");
let error = document.querySelector(".email__error");


button.onclick = (event) => {
  
  // Prevent page refresh on form submission
  event.preventDefault();

  // If screen size is 1280px and above
  if (mediaQuery.matches) {

    // Check if email matches regex pattern
    if (email.value.match(pattern)) {
      button.style.right = "0";
      button.style.backgroundImage = "url(../images/icon-arrow.svg), \
                                      linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))";
      error.style.right = "75px";
      document.querySelector(".validation-text").style.opacity = "0";
      email.value = "";
    }

    // Show error when email doesn't match pattern
    else {
      button.style.right = "-27px";
      button.style.backgroundImage = "url(../images/icon-arrow.svg), \
                                      linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 80%, 86%))";
      error.style.right = "85px";
      document.querySelector(".validation-text").style.opacity = "1";
      email.focus();
    }
  } 

  // If screen size is below 1280px
  else {

    // Check if email matches regex pattern
    if (email.value.match(pattern)) {
      button.style.right = "0";
      button.style.backgroundImage = "url(../images/icon-arrow.svg), \
                                      linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))";
      document.querySelector(".validation-text").style.opacity = "0";
      email.value = "";
    }

    // Show error when email doesn't match pattern
    else {
      button.style.right = "-27px";
      button.style.backgroundImage = "url(../images/icon-arrow.svg), \
                                      linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 80%, 86%))";
      document.querySelector(".validation-text").style.opacity = "1";
      email.focus();
    }
  }

}



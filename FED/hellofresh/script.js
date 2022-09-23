var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav ul")

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {  
    console.log("hey")
    deNav.classList.toggle("toonMenu");
  }
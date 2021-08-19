// variables
const topBtn = document.querySelector(".topBtn i");
const hamburger = document.querySelector(".hamburger i");

// Event Listeners
document.addEventListener("scroll", displayBtn);
document.addEventListener("scroll", navBarDisplay);
hamburger.addEventListener("click", displayNav);

// Functions
function displayBtn() {
  let scrollHeight = document.documentElement.scrollTop;
  if (scrollHeight >= 100) {
    topBtn.style.display = "flex";
    topBtn.style.transition = "2s";
  } else {
    topBtn.style.display = "none";
    topBtn.style.transition = "2s";
  }
}

function displayNav(e) {
  e.preventDefault();
  const navDisplay = document.querySelector(".nav-display");
  if (navDisplay.classList.contains("close")) {
    navDisplay.style.display = "flex";
    navDisplay.classList.remove("close");
    navDisplay.classList.add("open");
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-close");
  } else {
    navDisplay.style.display = "none";
    hamburger.style.right = "30px";
    navDisplay.classList.add("close");
    navDisplay.classList.remove("open");
    hamburger.classList.add("fa-bars");
    hamburger.classList.remove("fa-close");
  }
}

function navBarDisplay() {
  let scrollHeight = document.documentElement.scrollTop;
  const nav = document.querySelector("nav");

  if (scrollHeight >= 400) {
    nav.style.background = "green";
  } else {
    nav.style.background = "transparent";
  }
}

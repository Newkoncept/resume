// variables
const topBtn = document.querySelector(".topBtn i");
const hamburger = document.querySelector(".hamburger i");

// Event Listeners
document.addEventListener("DOMContentLoaded", navBarDisplay);
document.addEventListener("DOMContentLoaded", displayBtn);
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

function navBarDisplay() {
	let scrollHeight = document.documentElement.scrollTop;
	const nav = document.querySelector("nav");

	if (scrollHeight >= 400) {
		nav.style.background = "green";
	} else {
		nav.style.background = "transparent";
	}
}

function displayNav(e) {
	e.preventDefault();
	const navDisplay = document.querySelector(".nav-display");
	navDisplay.classList.toggle("open");
	hamburger.classList.toggle("fa-close");
	hamburger.classList.toggle("fa-bars");
}

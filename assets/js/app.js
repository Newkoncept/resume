// variables
const topBtn = document.querySelector(".topBtn i");
const hamburger = document.querySelector(".hamburger i");
const about = document.querySelector("#about");

// Event Listeners
document.addEventListener("scroll", displayBtn);
document.addEventListener("scroll", navBarDisplay);
about.addEventListener("mousein", displayStyle);
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

function displayStyle() {
	about.classList.add("animate__animated animate__pulse");
}

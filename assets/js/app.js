// variables
const topBtn = document.querySelector(".topBtn i");
const hamburger = document.querySelector(".hamburger i");
const contactForm = document.querySelector("#contactForm");

// Event Listeners
document.addEventListener("DOMContentLoaded", displayItem);
document.addEventListener("scroll", displayItem);
hamburger.addEventListener("click", displayNav);
contactForm.addEventListener("submit", sendMessage);

// Functions
function displayItem() {
	navBarDisplay();
	displayBtn();
}

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

function displayMessage(message, type) {
	const div = document.createElement("div");
	div.classList.add("message", type);

	div.innerHTML = `${message}`;

	contactForm.insertBefore(div, document.querySelector("#email"));

	setTimeout(function () {
		document.querySelector(".message").remove();
	}, 2000);
}

function sendMessage(e) {
	e.preventDefault();

	// Get sent values
	const email = document.querySelector("#email").value;
	const message = document.querySelector("#message").value;

	if (email === "" || message === "") {
		displayMessage("Error, all fields are mandatory!!!", "error");
	} else {
		loadContactEffect();
		contactForm.reset();
	}
}

function loadContactEffect() {
	const contactSection = document.querySelector("#contact");

	// Hidding the contact form
	contactForm.style.display = "none";

	// Creting a variable for the spinner image
	const spinner = document.createElement("img");
	spinner.src = "assets/img/spinner.gif";
	spinner.classList.add("spinner");

	// Appending the spinner to the page
	contactSection.appendChild(spinner);

	setTimeout(function () {
		// Spinner removal
		document.querySelector(".spinner").remove();

		// Creting a variable for the mail image
		const mail = document.createElement("img");
		mail.src = "assets/img/mail.gif";
		mail.classList.add("mail");

		contactSection.appendChild(mail);

		setTimeout(function () {
			// Mail removal
			document.querySelector(".mail").remove();

			contactForm.style.display = "block";
		}, 5000);
	}, 3000);
}

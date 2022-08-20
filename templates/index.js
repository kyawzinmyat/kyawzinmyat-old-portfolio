var show = false;

var hamburger = document.querySelector(".nav-toggle");
hamburger.addEventListener("click", function () {
	document.body.classList.toggle('nav-open');
})

var nav = document.getElementById("nav");
nav.addEventListener("click", function () {
	document.body.classList.toggle('nav-open');
})
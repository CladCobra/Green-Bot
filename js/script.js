// Section Start Markers
var homeSectionStart = 0;
var descriptionSectionStart = 475;
var visualsSectionStart = 1375;
var prosAndConsSectionStart = 2125;
var breakthroughsSectionStart = 2600;

var currentSection;

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};
setClickedNavBarButton("Home");

window.addEventListener("scroll", function () {
	setClickedNavBarButton(getCurrentSection());
});

function navBarButtonClick(id) {
	setClickedNavBarButton(id);
}

function navBarHomeClick() {
	window.scrollTo({
		top: homeSectionStart,
		behavior: "smooth",
	});
	currentSection = "Home";
}

function navBarDescriptionClick() {
	window.scrollTo({
		top: descriptionSectionStart,
		behavior: "smooth",
	});
	currentSection = "Description";
}

function navBarVisualsClick() {
	window.scrollTo({
		top: visualsSectionStart,
		behavior: "smooth",
	});
	currentSection = "Visuals";
}

function navBarProsAndConsClick() {
	window.scrollTo({
		top: prosAndConsSectionStart,
		behavior: "smooth",
	});
	currentSection = "Pros & Cons";
}

function navBarBreakthroughsClick() {
	window.scrollTo({
		top: breakthroughsSectionStart,
		behavior: "smooth",
	});
	currentSection = "Breakthroughs";
}

function getCurrentSection() {
	if (scrollY >= homeSectionStart && scrollY < descriptionSectionStart) {
		return "Home";
	} else if (
		scrollY >= descriptionSectionStart &&
		scrollY < visualsSectionStart
	) {
		return "Description";
	} else if (
		scrollY >= visualsSectionStart &&
		scrollY < prosAndConsSectionStart
	) {
		return "Visuals";
	} else if (
		scrollY >= prosAndConsSectionStart &&
		scrollY < breakthroughsSectionStart
	) {
		return "Pros & Cons";
	} else if (scrollY >= breakthroughsSectionStart) {
		return "Breakthroughs";
	}
}

function setClickedNavBarButton(id) {
	if (id == "Home") {
		document.getElementById("Home").classList.add("nav-bar-selected");

		document.getElementById("Description").classList.remove("nav-bar-selected");

		document.getElementById("Visuals").classList.remove("nav-bar-selected");

		document.getElementById("Pros & Cons").classList.remove("nav-bar-selected");

		document
			.getElementById("Breakthroughs")
			.classList.remove("nav-bar-selected");

		currentSection = "Home";
	} else if (id == "Description") {
		document.getElementById("Home").classList.remove("nav-bar-selected");

		document.getElementById("Description").classList.add("nav-bar-selected");

		document.getElementById("Visuals").classList.remove("nav-bar-selected");

		document.getElementById("Pros & Cons").classList.remove("nav-bar-selected");

		document
			.getElementById("Breakthroughs")
			.classList.remove("nav-bar-selected");

		currentSection = "Description";
	} else if (id == "Visuals") {
		document.getElementById("Home").classList.remove("nav-bar-selected");

		document.getElementById("Description").classList.remove("nav-bar-selected");

		document.getElementById("Visuals").classList.add("nav-bar-selected");

		document.getElementById("Pros & Cons").classList.remove("nav-bar-selected");

		document
			.getElementById("Breakthroughs")
			.classList.remove("nav-bar-selected");

		currentSection = "Visuals";
	} else if (id == "Pros & Cons") {
		document.getElementById("Home").classList.remove("nav-bar-selected");

		document.getElementById("Description").classList.remove("nav-bar-selected");

		document.getElementById("Visuals").classList.remove("nav-bar-selected");

		document.getElementById("Pros & Cons").classList.add("nav-bar-selected");

		document
			.getElementById("Breakthroughs")
			.classList.remove("nav-bar-selected");

		currentSection = "Pros & Cons";
	} else if (id == "Breakthroughs") {
		document.getElementById("Home").classList.remove("nav-bar-selected");

		document.getElementById("Description").classList.remove("nav-bar-selected");

		document.getElementById("Visuals").classList.remove("nav-bar-selected");

		document.getElementById("Pros & Cons").classList.remove("nav-bar-selected");

		document.getElementById("Breakthroughs").classList.add("nav-bar-selected");

		currentSection = "Breakthroughs";
	}
}

const header = document.querySelector("header");
const sectionOne = document.querySelector(".top-area");

const sectionOneOptions = {
	rootMargin: "-92% 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			header.classList.add("nav-scrolled");
		} else {
			header.classList.remove("nav-scrolled");
		}
	});
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
	});
});

$('#all-projects').click(function() {
    $('.project-card').css("display", "block");
});
$('#web-projects').focus(function() {
	$('.project-card').css("display", "none");
    $('.web-project.project-card').css("display", "block");
});
$('#app-projects').focus(function() {
	$('.project-card').css("display", "none");
    $('.app-project.project-card').css("display", "block");
});
$('#art-projects').focus(function() {
	$('.project-card').css("display", "none");
    $('.art-project.project-card').css("display", "block");
});
$('#photo-projects').focus(function() {
	$('.project-card').css("display", "none");
    $('.photo-project.project-card').css("display", "block");
});
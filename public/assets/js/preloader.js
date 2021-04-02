var loader = selectQ('.loader__wrapper');
var preload = document.querySelector('.preload');

window.addEventListener ("load", function() {
	loader.style.opacity = 0;
	preload.classList.remove("preload");
});
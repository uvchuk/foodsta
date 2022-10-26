(() => {
	const mobileMenu = document.querySelector("[data-modal]");
	const openMenuBtn = document.querySelector("[data-modal-open]");
	const closeMenuBtn = document.querySelector("[data-modal-close]");
	const bodyLock = document.querySelector("[data-body-lock]");

	document.addEventListener("click", function (e) {
		if (e.target.dataset.toggle === "modal") {
			toggleMenu();
		}
	});

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
		openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
		mobileMenu.classList.toggle("is-open");
		bodyLock.classList.toggle("locked");

		const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener("click", toggleMenu);
	closeMenuBtn.addEventListener("click", toggleMenu);

	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
		if (!e.matches) return;
		mobileMenu.classList.remove("is-open");
		bodyLock.classList.remove("locked");
		openMenuBtn.setAttribute("aria-expanded", false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();

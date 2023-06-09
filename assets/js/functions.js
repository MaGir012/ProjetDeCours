$(document).ready(function () {

	function nav() {
		$('.nav-toggle').click(function () {
			$('.nav').toggleClass('open');
		});
	}

	function smoothScroll(target) {
		const element = document.querySelector(target);
		window.scrollTo({
			behavior: 'smooth',
			top: element.offsetTop
		});
	}

	function initSlider() {
		const slider = document.querySelector('#full-slide');
		const slides = slider.querySelectorAll('.slide');
		const prevBtn = slider.querySelector('.prev');
		const nextBtn = slider.querySelector('.next');
		let currentSlide = 0;

		function showSlide(index) {
			slides.forEach((slide, i) => {
				if (i === index) {
					slide.classList.add('active');
				} else {
					slide.classList.remove('active');
				}
			});
		}

		function prevSlide() {
			currentSlide--;
			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}
			showSlide(currentSlide);
		}

		function nextSlide() {
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			showSlide(currentSlide);
		}

		prevBtn.addEventListener('click', prevSlide);
		nextBtn.addEventListener('click', nextSlide);

		showSlide(currentSlide);
	}

	const links = document.querySelectorAll('.menu-link');

	links.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const target = event.target.getAttribute('href');
			smoothScroll(target);
		});
	});

	nav();
	initSlider();
});

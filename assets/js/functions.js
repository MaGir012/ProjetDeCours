$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
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

nav();
const links = document.querySelectorAll('.menu-link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    smoothScroll(target);
  });
});

});

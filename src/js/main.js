$(document).ready(function() {

	const navToggler = (btn, menu) => {
		btn = $(`.${btn}`);
		menu = $(`.${menu}`);

		btn.on('click', function() {
			$(this).toggleClass('active');
			menu.toggleClass('active');
		})
	}

	navToggler('header-nav-btn', 'header-nav'); 

	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		prevArrow: `<button type="button" class="slider-arr left-arr">Previous</button>`,
		nextArrow: `<button type="button" class="slider-arr right-arr">Next</button>`
	});


	$('.projects-row').isotope({
	  	masonry: {
		    gutter: 25,
		    columnWidth: '.cart'
		    //fitWidth: true
	  	}
	})
})
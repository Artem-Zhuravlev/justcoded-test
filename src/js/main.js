$(document).ready(function() {

	/* --- burger menu --- */

	const navToggler = (btn, menu) => {
		btn = $(`.${btn}`);
		menu = $(`.${menu}`);

		btn.on('click', function() {
			$(this).toggleClass('active');
			menu.toggleClass('active');
			$('body').toggleClass('body-overlay');
		})
	}

	navToggler('header-nav__btn', 'header-nav__list'); 

	/* --- ancor navigation --- */

	$(".header-nav__list a").on("click", function (event) {
		$('body').removeClass('body-overlay');
		$('.header-nav__btn').removeClass('active');
		$('.header-nav__list').removeClass('active');
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	  });

	/* --- slider --- */

	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		prevArrow: `<button type="button" class="slider-arr left-arr">Previous</button>`,
		nextArrow: `<button type="button" class="slider-arr right-arr">Next</button>`
	});

	/* --- new posts  --- */

	$('.more').on('click', function() {
		$(this).addClass('isLoading');

		setTimeout(() => {
			$(this).removeClass('isLoading');
			$.getJSON('js/data.json', function(data){
		  	var container = $('.projects__row');
		  	var items = [];

		  	$(data).each((i, item) => {
		  		items.push(` 
		  			<article class="cart projects__cart" id="${item.id}" tabindex="-1">
        			<div class="cart-pic">
                <div class="cart-controlls">
                	<a href="#" class="cart-view">Show more</a>
                	<button class="cart-favourite">Add to favourite</button>
                </div>
                <img src="images/${item.pic}" alt="">
              </div>
              <footer class="cart-desc">
                <h4>${item.title}</h4>
                <p><em>${item.label}</em></p>
              </footer>
            </article>
		  		`)
		  	});

		  	container.append(items);
			});
		}, 2000);
		
	}); 

	/* --- validation --- */

	let btn = $('.subscribe-form-btn');
	$(".subscribe-form input[type='email']").keyup(function(){
    var email = $(this).val();

    if(email != 0) {
      if(isValidEmailAddress(email)) {
      	getFormState.call(this, "green", false);
      } else {
        getFormState.call(this, "#b82222", true);
      }
    } else {
      getFormState.call(this, "transparent", false);     
    }

  });

  function getFormState(borderColor, btnState) {
  	$(this).css({
      "border-color": borderColor
    });

    btn.attr('disabled', btnState);
  }


	function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
	}
})
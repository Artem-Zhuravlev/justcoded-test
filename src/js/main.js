$(document).ready(function() {

	const navToggler = (btn, menu) => {
		btn = $(`.${btn}`);
		menu = $(`.${menu}`);

		btn.on('click', function() {
			$(this).toggleClass('active');
			menu.toggleClass('active');
		})
	}

	navToggler('header-nav-btn', 'header-nav-list'); 

	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		prevArrow: `<button type="button" class="slider-arr left-arr">Previous</button>`,
		nextArrow: `<button type="button" class="slider-arr right-arr">Next</button>`
	});

	$('.more').on('click', function() {
		$(this).addClass('isLoading');

		setTimeout(() => {
			$(this).removeClass('isLoading');
			$.getJSON('js/data.json', function(data){
		  	var container = $('.projects-row');
		  	var items = [];

		  	$(data).each((i, item) => {
		  		items.push(` 
		  			<article class="cart" id="${item.id}">
        			<main class="cart-pic">
                <div class="cart-controlls">
                	<a href="#" class="cart-view">Show more</a>
                	<button class="cart-favourite">Add to favourite</button>
                </div>
                <img src="images/${item.pic}" alt="">
              </main>
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
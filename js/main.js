$(document).ready(function (){

	$("#email_submit").click(function (){

		var $email_data_var;
		$email_data_var = $("#email_data").val();
		if($email_data_var == ''){
			$("#email_msg").html("Please Enter a Email Address");
		}
		else{

			$.ajax({

				type:'POST',
				url:"/quform/email-submit.php",
				data:{email_data_values : $email_data_var},
				success:function(response){
					$("#email_msg").html(response);
				}

			});

		}

	});

});

!(function (a) {
  'use strict';
  var t = a(window);

  function o() {
    var e, o;
    (e = a('.full-screen')),
      (o = t.height()),
      e.css('min-height', o),
      (e = a('header').height()),
      (o = a('.screen-height')),
      (e = t.height() - e),
      o.css('height', e);
  }
  a('#preloader').fadeOut('normall', function () {
    a(this).remove();
  }),
    t.on('scroll', function () {
      var e = t.scrollTop(),
        o = a('.navbar-brand img');
      e <= 50
        ? (a('header').removeClass('scrollHeader').addClass('fixedHeader'),
          o.attr('src', 'img/logos/logo-inner.png'))
        : (a('header').removeClass('fixedHeader').addClass('scrollHeader'),
          o.attr('src', 'img/logos/footer-dark-logo.png'));
    }),
    t.on('scroll', function () {
      500 < a(this).scrollTop()
        ? a('.scroll-to-top').fadeIn(400)
        : a('.scroll-to-top').fadeOut(400);
    }),
    a('.scroll-to-top').on('click', function (e) {
      e.preventDefault(), a('html, body').animate({ scrollTop: 0 }, 600);
    }),
    a('.parallax,.bg-img').each(function (e) {
      a(this).attr('data-background') &&
        a(this).css(
          'background-image',
          'url(' + a(this).data('background') + ')'
        );
    }),
    a('.story-video').magnificPopup({ delegate: '.video', type: 'iframe' }),
    a('.popup-social-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    t.resize(function (e) {
      setTimeout(function () {
        o();
      }, 500),
        e.preventDefault();
    }),
    o(),
    a(document).ready(function () {
      a('.popular-courses-carousel').owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !0,
        margin: 30,
        responsive: {
          0: { items: 1, margin: 20 },
          768: { items: 2 },
          1200: { items: 3 },
        },
      }),
        a('.misson-carousel').owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1400: { items: 4 },
          },
        }),
        a('.testimonial-carousel').owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: { 0: { items: 1 }, 768: { items: 2 } },
        }),
        a('.client-carousel').owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            481: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
          },
        }),
        a('.blog-carousel').owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 1 },
            992: { items: 2 },
            1200: { items: 2 },
          },
        }),
        a('.portfolio-details-carousel').owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 3e3,
          smartSpeed: 1500,
          nav: !1,
          center: !1,
          dots: !0,
          margin: 20,
          responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } },
        }),
        a('.related-portfolio-carousel').owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 900,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            767: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        }),
        a('.owl-carousel').owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        0 !== a('.horizontaltab').length &&
          a('.horizontaltab').easyResponsiveTabs({
            type: 'default',
            width: 'auto',
            fit: !0,
            tabidentify: 'hor_1',
            activate: function (e) {
              var o = a(this),
                t = a('#nested-tabInfo');
              a('span', t).text(o.text()), t.show();
            },
          }),
        a('.countup').counterUp({ delay: 25, time: 2e3 }),
        a('.countdown').countdown({
          date: '01 Jan 2024 00:01:00',
          format: 'on',
        });
    }),
    t.on('load', function () {
      var o = a('.portfolio-gallery').isotope({});
      a('.filtering').on('click', 'span', function () {
        var e = a(this).attr('data-filter');
        o.isotope({ filter: e });
      }),
        a('.filtering').on('click', 'span', function () {
          a(this).addClass('active').siblings().removeClass('active');
        }),
        a('.portfolio-gallery').lightGallery(),
        t.stellar();
    });
})(jQuery);


const data = [
  {
    id:1,
    name:"Know your Identity",
    path: "img/content/Book1.jpg",
    price: 4000,
  },
  {
    id:2,
    name:"Identity Power",
    path: "img/content/Book2.jpg",
    price: 5000,
  },
  {
    id:3,
    name:"The Path Finder",
    path: "img/content/Book3.jpg",
    price: 5000,
  },
  {
    id:4,
    name:"The Path Finder",
    path: "img/content/Book3.jpg",
    price: 5000,
  },
  {
    id:5,
    name:"The Path Finder",
    path: "img/content/Book3.jpg",
    price: 5000,
  },
];

function openSingleBooks(id) {
  const object = data.find(item => item.id === id);
  localStorage.setItem('item', JSON.stringify(object))
  
  document.getElementById("img-ID").src = object.path

}

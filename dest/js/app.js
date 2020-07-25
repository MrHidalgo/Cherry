"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

	var footerSwiper = new Swiper('.footerSwiper', {
		loop: true,
		grabCursor: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 30,
			slideShadows: false
		},
		speed: 850,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 1,
		spaceBetween: 50
	});
};

(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var paymentsRandomView = function paymentsRandomView() {
		function randowView(setTimeVal) {
			setTimeout(function () {
				var _num1 = Math.floor(Math.random() * 10),
				    _num2 = Math.floor(Math.random() * 10),
				    _num3 = Math.floor(Math.random() * 10);

				var paymentsImg = $('.payments__logo img');

				$(paymentsImg[_num1]).fadeIn(750);
				$(paymentsImg[_num2]).fadeIn(750);
				$(paymentsImg[_num3]).fadeIn(750);

				setTimeout(function () {
					$('.payments__logo img').fadeOut(750);
				}, setTimeVal);
			}, 100);
		}

		randowView(4000);

		var timerId = setInterval(function () {
			randowView(3500);
		}, 5500);
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		// ==========================================

		// callback
		// paymentsRandomView();
		// ==========================================
	};

	window.addEventListener('load', function (ev) {
		initNative();
	}, false);
})();
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const paymentsRandomView = () => {
		function randowView(setTimeVal) {
			setTimeout(() => {
				const _num1 = Math.floor(Math.random() * 10),
					_num2 = Math.floor(Math.random() * 10),
					_num3 = Math.floor(Math.random() * 10);

				const paymentsImg = $('.payments__logo img');

				$(paymentsImg[_num1]).fadeIn(750);
				$(paymentsImg[_num2]).fadeIn(750);
				$(paymentsImg[_num3]).fadeIn(750);

				setTimeout(() => {
					$('.payments__logo img').fadeOut(750);
				}, setTimeVal);
			}, 100);
		}

		randowView(4000);

		let timerId = setInterval(() => {
			randowView(3500);

		}, 5500);
	};


	const viewPortAnimation = () => {
		const popupTL1 = new TimelineMax({
				paused: true,
				onComplete: completedAnimation1,
			}),
			popupTL2 = new TimelineMax({
				paused: true,
				onComplete: completedAnimation2,
			});

		const animationPopup1 = () => {
			popupTL1.set('.details__popup-desc-1, .details__popup-desc-2', {opacity: 0});
			popupTL1.set('.details__popup-progress', {scaleX: 0, transformOrigin: 'left 0'});

			popupTL1
				.to('.details__popup-1', 1, {opacity: 1, ease: Power2.easeInOut})
				.to('.details__popup-progress', 2, {scaleX: 1, ease: Power2.easeInOut}, '+=0.15')
				.to('.details__popup-desc-1', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1.85')
				.to('.details__popup-desc-2', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1.25')
				.to('.details__popup-1', 1, {opacity: 0, ease: Power2.easeInOut})
			;
		};
		const animationPopup2 = () => {
			popupTL2
				.to('.details__popup-2', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
				.to('.details__popup-2', 1, {opacity: 0, ease: Power2.easeInOut}, '+=5');
		};
		function completedAnimation1() {
			popupTL2.restart().play();
		}
		function completedAnimation2() {
			popupTL1.restart();
		}

		animationPopup1();
		animationPopup2();

		AOS.init({
			offset: 200,
			delay: 0,
			duration: 500,
			easing: 'ease-in-out',
			once: false,
			mirror: true,
			useClassNames: true,
			initClassName: false,
			animatedClassName: 'animated',
		});

		document.querySelector('.details__animation-bg').addEventListener('animationend', (ev) => {
			popupTL1.restart().play();
		});

		document.addEventListener('aos:out', () => {
			popupTL1.restart().kill();
			popupTL2.restart().kill();
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		// ==========================================

		// callback
		// paymentsRandomView();
		viewPortAnimation();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);
})();

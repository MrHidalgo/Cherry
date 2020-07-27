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
				.to('.details__popup-1', 1, {opacity: 0, ease: Power2.easeInOut}, '+=1')
			;
		};
		const animationPopup2 = () => {
			popupTL2
				.to('.details__popup-2', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
				.to('.details__popup-2', 1, {opacity: 0, ease: Power2.easeInOut}, '+=4');
		};
		function completedAnimation1() {
			popupTL2.restart().play();
		}
		function completedAnimation2() {
			$('.details__animation-bg').removeClass('bounceInLeft').addClass('fadeOut');

			setTimeout(() => {
				$('.details__animation-bg').removeClass('fadeOut');

				AOS.refreshHard();
			}, 500);
		}

		animationPopup1();
		animationPopup2();

		AOS.init({
			offset: 200,
			delay: 50,
			duration: 500,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
			useClassNames: true,
			initClassName: false,
			animatedClassName: 'animated',
		});

		document.querySelector('.details__animation-bg').addEventListener('animationend', (ev) => {
			setTimeout(() => {
				popupTL1.restart().play();
			}, 500);
		});

		document.addEventListener('aos:out', () => {
			popupTL1.restart().kill();
			popupTL2.restart().kill();
		});
	};


	const initPathFloatingAnimation = () => {
		let xMin = -2,
			xMax = 30,
			yMin = 0,
			yMax = 5,
			positionsPerElement = 5,
			secondsPerIteration = 4,
			elements = $("[floating-node-js]");

		for (let i = 0; i < elements.length; i++) {
			randomFloat(elements[i], positionsPerElement, secondsPerIteration);
		}

		function random(min, max) {
			return min + Math.random() * (max - min);
		}

		function randomFloat(element, positions, duration) {
			var tl = new TimelineMax({
				repeat: -1,
				yoyo: true,
				delay: Math.random() * duration
			});

			for (var _i = 0; _i < positions; _i++) {
				tl.to(element, duration, {
					x: random(xMin, xMax),
					y: random(yMin, yMax),
					ease: Sine.easeInOut
				});
			}

			return tl;
		}
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
		initPathFloatingAnimation();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);
})();

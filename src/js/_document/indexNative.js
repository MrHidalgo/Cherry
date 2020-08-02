(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
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
			popupTL1.set('.details__popup-desc-2', {opacity: 0});
			popupTL1.set('.details__popup-progress', {scaleX: 0, transformOrigin: 'left 0'});

			popupTL1
				.to('.details__popup-1', 1, {opacity: 1, ease: Power2.easeInOut})
				.to('.details__popup-progress', 3.5, {scaleX: 1, ease: Power2.linear})
				// .to('.details__popup-desc-1', 2, {opacity: 1, ease: Power2.easeInOut}, '-=1.75')
				.to('.details__popup-desc-2', 2, {opacity: 1, ease: Power2.easeInOut}, '-=2')
				.to('.details__popup-1', 1.25, {opacity: 0, ease: Power2.easeInOut}, '+=1.75')
			;
		};
		const animationPopup2 = () => {
			popupTL2
				.to('.details__popup-2', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
				.to('.details__popup-2', 1, {opacity: 0, ease: Power2.easeInOut}, '+=4.5');
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

		if(document.querySelector('.details__animation-bg')) {
			document.querySelector('.details__animation-bg').addEventListener('animationend', (ev) => {
				setTimeout(() => {
					popupTL1.restart().play();
				}, 500);
			});

			document.addEventListener('aos:out', () => {
				popupTL1.restart().kill();
				popupTL2.restart().kill();
			});
		}
	};


	const initPathFloatingAnimation = () => {
		let secondsPerIteration = 4,
			elements = $("[floating-node-js]");

		const tl = new TimelineMax({
			repeat: -1,
			yoyo: true,
		});

		tl
			.to(elements, secondsPerIteration, {x: '35', ease: Power1.easeInOut})
			.to(elements, secondsPerIteration, {x: '-5', ease: Power1.easeInOut})
		;
	};


	const selectCard = () => {
		const selectTMPL = `
		<div class="setup__details">
			<div>
				<select class="setup__select" name="">
					<option value="0" selected="selected">Card Type</option>
					<option value="1">Card Type</option>
					<option value="2">Card Type</option>
					<option value="3">Card Type</option>
				</select>
			</div>
			<div>
				<select class="setup__select" name="">
					<option value="0" selected="selected">Bank/Issuer</option>
					<option value="1">Bank/Issuer</option>
					<option value="2">Bank/Issuer</option>
					<option value="2">Bank/Issuer</option>
				</select>
			</div>
			<div>
				<select class="setup__select" name="">
					<option value="0" selected="selected">Card Network</option>
					<option value="1">Card Network</option>
					<option value="2">Card Network</option>
					<option value="3">Card Network</option>
				</select>
			</div>
		</div>
		`;

		$('[select-card-js]').change((ev) => {
			const val = $(ev.currentTarget).val();

			(val > 0) ? $('[select-details-js]').fadeIn(550) : $('[select-details-js]').fadeOut(550);

			$('[select-wrapper-js] *').remove();

			for(let idx = 0; idx < val; idx++) $('[select-wrapper-js]').append(selectTMPL)
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
		initPopups();
		initHamburger();
		initSmoothScroll();
		// ==========================================

		// callback
		viewPortAnimation();
		initPathFloatingAnimation();
		selectCard();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);
})();

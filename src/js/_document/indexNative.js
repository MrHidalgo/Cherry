(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const paymentsRandomView = () => {
		function randowView(setTimeVal) {
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
		}

		randowView(4000);

		let timerId = setInterval(() => {
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
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		// ==========================================

		// callback
		paymentsRandomView();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);
})();

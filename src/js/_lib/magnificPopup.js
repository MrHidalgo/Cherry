

/**
 * @name initPopups
 *
 * @description
 */
const initPopups = () => {

	const magnificPopupOpt = {
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function() {}
		}
	};

  $('[popup-js]').magnificPopup(magnificPopupOpt);


	$('[popup-thx-js]').on('click', (ev) => {
		if($('#mainForm').is(":valid")) {
			console.log(`valid -> added Ajax request`);
			$('[popup-thx-js]').magnificPopup(magnificPopupOpt);
			$('[popup-thx-js]').magnificPopup('open');
			ev.preventDefault();
		}
	});

};



/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const footerSwiper = new Swiper('.footerSwiper', {
    loop: true,
    grabCursor: true,
    effect: 'coverflow',
		coverflowEffect: {
			rotate: 30,
			slideShadows: false,
		},
		speed: 850,
    autoplay: {
      delay: 5000,
			disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 50,
  });
};

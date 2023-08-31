import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    slidesPerView: "auto",//能呈現幾個.swiper-slide
    speed: 8000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }
});
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export const gallerySwiper = new Swiper(".mySwiper", {
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})
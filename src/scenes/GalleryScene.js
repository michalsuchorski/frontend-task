import { logEvent } from "../utils/EventTracker";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";

export class GalleryScene {
  constructor(container, onSlideClick, scrollTarget) {
    this.container = container;
    this.onSlideClick = onSlideClick;
    this.scrollTarget = scrollTarget;
    this.swiper = null;
  }

  init() {
    const swiperEl = this.container.querySelector(".mySwiper");

    if (!swiperEl) {
      console.error("Swiper container not found");
    }

    this.swiper = new Swiper(swiperEl, {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const slides = this.container.querySelectorAll(".swiper-slide");
    slides.forEach((slide, index) => {
      slide.addEventListener("click", () => {
        this.scrollToVideo();
        logEvent(`user_interaction:slide_click:${index + 1}`);
        this.onSlideClick?.(index + 1)
      });
    });

    const ctaButton = this.container.querySelector(".swiper-button-cta-img");
    if (ctaButton) {
      ctaButton.addEventListener("click", () => {
        logEvent("user_interaction:cta_click");
      });
    }
  }
  scrollToVideo(){
    if(!this.scrollTarget) return;
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: this.scrollTarget,
        }, 
        ease: "power2.out"
    })
  }
}

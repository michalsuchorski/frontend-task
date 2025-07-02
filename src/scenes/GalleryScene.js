import { logEvent } from "../utils/EventTracker";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";

export class GalleryScene {
  constructor(container, onSlideClick, scrollTarget, images = []) {
    this.container = container;
    this.onSlideClick = onSlideClick;
    this.scrollTarget = scrollTarget;
    this.images = images;
    this.swiper = null;
  }

  init() {
    const swiperEl = this.container.querySelector(".mySwiper");
    if (!swiperEl) {
      console.error("Swiper container not found");
    }

    this.renderSlides();

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
        this.onSlideClick?.(index + 1);
      });
    });

    const ctaButton = this.container.querySelector(".swiper-button-cta-img");
    if (ctaButton) {
      ctaButton.addEventListener("click", () => {
        logEvent("user_interaction:cta_click");
      });
    }

    gsap.from(swiperEl, {
      duration: 0.8,
      y: "100%",
    });
  }

  scrollToVideo() {
    if (!this.scrollTarget) return;
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: this.scrollTarget,
      },
      ease: "power2.out",
    });
  }

  renderSlides() {
    const swiperWrapper = this.container.querySelector(".swiper-wrapper");
    if (!swiperWrapper) {
      console.error(".swiper-wrapper not found");
    }

    this.images.forEach((image, index) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${image}" alt="slide ${index + 1}" />`;
      swiperWrapper.appendChild(slide);
    });
  }

  show() {
    this.container.classList.remove("hidden");
  }
}

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

export class IntroScene {
  constructor(container, onComplete, scrollTarget) {
    this.container = container;
    this.onComplete = onComplete;
    this.scrollTarget = scrollTarget;
    this.timeout = null;
  }

  init() {
    const headline = document.querySelector(".scene-intro-content-image");
    const introTextEl = document.querySelector(".intro-text");
    const allTiles = document.querySelectorAll(
      ".scene-intro-content-panel-plate"
    );
    const allTilesText = document.querySelectorAll(
      ".scene-intro-content-panel-plate-text"
    );
    const aboutUsEl = document.querySelector(".about-us-element");

    gsap.from(allTiles, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(allTilesText, {
      duration: 0.5,
      opacity: 0,
      x: 20,
      stagger: 0.1,
      ease: "back.inOut",
    });

    gsap.from(headline, {
      duration: 1,
      y: "-100%",
    });

    gsap.from(introTextEl, {
      duration: 0.7,
      y: "-100%",
    });

    gsap.from(aboutUsEl, {
      duration: 0.7,
      y: "100%",
    });

    this.timeout = setTimeout(() => {
      this.scrollToGallery();
      this.onComplete?.();
    }, 8000); 
  }
  scrollToGallery() {
    if (!this.scrollTarget) return;
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: this.scrollTarget,
      },
      ease: "power2.out",
    });
  }
}

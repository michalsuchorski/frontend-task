import { logEvent } from "../utils/EventTracker";
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
    this.timeout = setTimeout(() => {
      this.scrollToGallery();
      this.onComplete?.();
    }, 2000);
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

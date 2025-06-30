import { isMobileDevice } from "./IsMobileDevice";

export const checkOrientation = () => {
  const orientationEl = document.querySelector(".orientation-lock");
  const isPortrait = window.innerHeight > window.innerWidth;
  const isMobile = isMobileDevice();

  if (!isMobile) {
    orientationEl.classList.add("hidden");
    return;
  }

  if (isPortrait) {
    orientationEl.classList.add("hidden");
  } else {
    orientationEl.classList.remove("hidden");
  }
};

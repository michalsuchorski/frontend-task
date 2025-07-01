import { isMobileDevice } from "./IsMobileDevice";

export const checkOrientation = () => {
  const orientationEl = document.querySelector(".orientation-lock");
  const isPortrait = window.innerHeight > window.innerWidth;
  const isMobile = isMobileDevice();
  const appContainer = document.querySelector(".app-container");

  if (!isMobile) {
    orientationEl.classList.add("hidden");
    appContainer.classList.remove("hidden");
    return;
  }

  if (isPortrait) {
    orientationEl.classList.add("hidden");
    appContainer.classList.remove("hidden");
  } else {
    orientationEl.classList.remove("hidden");
    appContainer.classList.add("hidden");
  }
};

import gsap from "gsap";
import { GalleryScene } from "./scenes/GalleryScene";
import { IntroScene } from "./scenes/IntroScene";
import { VideoScene } from "./scenes/VideoScene";
import { checkOrientation } from "./utils/CheckOrientation";
import { logEvent } from "./utils/EventTracker";
import { observeSceneChanges } from "./utils/SceneChange";
import { getImages } from "./utils/GetImages";

const allScenes = document.querySelectorAll(".scene");
observeSceneChanges(allScenes);

document.addEventListener("DOMContentLoaded", () => {
  logEvent("ad_load");

  const loaderEl = document.querySelector(".loader");
  const introEl = document.querySelector(".scene-intro");
  const galleryEl = document.querySelector(".scene-gallery");
  const videoEl = document.querySelector(".scene-video");

  window.onload = () => {
    gsap.to(loaderEl, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        loaderEl.style.display = "none";
        loaderEl.style.zIndex = "0";
      },
    });
  };

  const videoScene = new VideoScene(videoEl);

  const galleryScene = new GalleryScene(
    galleryEl,
    (slideIndex) => {
      videoScene.init(slideIndex);
    },
    videoEl,
    getImages("shoe", 4)
  );

  const introScene = new IntroScene(
    introEl,
    () => {
      galleryScene.init();
      galleryScene.show();
      videoScene.show();
    },
    galleryEl
  );

  window.addEventListener("resize", () => {
    checkOrientation();
    logEvent("window_resize");
  });

  window.addEventListener("focus", () => {
    logEvent("page_hide");
  });

  checkOrientation();

  introScene.init();
});

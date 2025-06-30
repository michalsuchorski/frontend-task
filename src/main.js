import { GalleryScene } from "./scenes/GalleryScene";
import { IntroScene } from "./scenes/IntroScene";
import { VideoScene } from "./scenes/VideoScene";
import { checkOrientation } from "./utils/CheckOrientation";
import { logEvent } from "./utils/EventTracker";
import { observeSceneChanges } from "./utils/SceneChange";

const allScenes = document.querySelectorAll(".scene");
observeSceneChanges(allScenes);

document.addEventListener("DOMContentLoaded", () => {
  logEvent("ad_load");

  const introEl = document.querySelector(".scene-intro");
  const galleryEl = document.querySelector(".scene-gallery");
  const videoEl = document.querySelector(".scene-video");

  const videoScene = new VideoScene(videoEl);

  const galleryScene = new GalleryScene(
    galleryEl,
    (slideIndex) => {
      videoScene.init(slideIndex);
    },
    videoEl
  );

  const introScene = new IntroScene(
    introEl,
    () => {
      galleryScene.init();
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

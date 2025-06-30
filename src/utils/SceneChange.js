import { logEvent } from "./EventTracker";

let currentScene = null;

export function observeSceneChanges(sceneElements) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        const topVisible = visible[0];
        const sceneName = topVisible.target.dataset.scene;

        if (sceneName !== currentScene) {
          currentScene = sceneName;
          logEvent(`scene_change:${sceneName}`);
        }
      }
    },
    {
      threshold: 0.6, 
    }
  );

  sceneElements.forEach((el) => {
    if (el) observer.observe(el);
  });
}

// import { IntroScene } from "./scenes/IntroScene";
// import { GalleryScene } from "./scenes/GalleryScene";
// import { VideoScene } from "./scenes/VideoScene";
import { checkOrientation } from "./utils/CheckOrientation";
import { logEvent } from "./utils/EventTracker";
import { gallerySwiper } from "./utils/GallerySwiper";

document.addEventListener('DOMContentLoaded', () => {
    logEvent('ad_load')

    window.addEventListener('resize', () => {
        checkOrientation()
        logEvent('window_resize')
    })

    window.addEventListener('focus', () => {
        logEvent('page_hide')
    })

   
    checkOrientation()
})
export class VideoScene {
  constructor(container) {
    this.container = container;
    this.video = this.container.querySelector(".video-wrapper");
  }
  init(slideIndex) {
    const positionClasses = [
      "position-top-left",
      "position-top-right",
      "position-bottom-left",
      "position-bottom-right",
    ];

    this.video.classList.remove(...positionClasses)
    this.video.classList.add(
      positionClasses[slideIndex - 1] || positionClasses[0]
    );
  }
  show(){
    this.container.classList.remove('hidden')
  }
}

export const checkOrientation = () => {
    const orientationEl = document.querySelector('.orientation-lock')
    const isPortrait = window.innerHeight > window.innerWidth;

    isPortrait ? orientationEl.classList.add('hidden') : orientationEl.classList.remove('hidden')
}
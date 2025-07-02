export const getImages = (imageName, count) => {
  const images = [];
  const assetsUrl = "../../assets/";

  for (let i = 1; i <= count; i++) {
    images.push(`${assetsUrl}/${imageName}${i}.png`);
  }

  return images;
};

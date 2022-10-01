export default function ImageScroll(imageNumber, seletor, speed = 1, offset = 0) {
  let offsetY = Math.floor(window.pageYOffset);
  let rect = document.querySelector(seletor).getBoundingClientRect();
  let rectY = Math.floor(rect.y);
  let rectHeight = Math.floor(rect.height);
  let value = Math.floor(
    ((offsetY - offset - rectY) / rectHeight) * (imageNumber / (3.6 / speed))
  );
  if (Math.sign(value) === -1 || Math.sign(value) === 0) {
    value = 1;
  } else if (value >= imageNumber) {
    value = imageNumber - 1;
  }
  // console.log(seletor, value);
  return value;
}

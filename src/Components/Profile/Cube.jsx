import { useEffect, useState } from "react";
import imgArray from "./profile-images";
import ImageScroll from "../Scroll";
function Cube(props) {
  const loadingIndicator = (
    <div style={{ width: "2em", height: "2em" }}>Loading...</div>
  );
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(props.frames);
  const [blur, setBlur] = useState(
    (props.frames - 1) / (props.frames / props.blurMultiplier)
  );
  const cacheImages = async (srcArray) => {
    console.log("%cloading \"cube\" images...", 'color:goldenRod');
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    console.log("%c\"cube\" images loaded", 'color:MediumSeaGreen');
    setIsLoading(false);
    StartRotate(2000)
  };

function StartRotate(duration = 1000){
  let counter = props.frames;
  setTimeout(() => {
    const i = setInterval(function () {
      setIndex(counter);

      counter--;
      setBlur((counter - 1) / (props.frames / props.blurMultiplier));
      if (counter === 1) {
        window.addEventListener("scroll", () => {
          setIndex(ImageScroll(props.frames, ".Cube", 2.75));
        });
        clearInterval(i);
      }
    }, 75 / props.speed);
  }, props.timeout * duration);
}

  useEffect(() => {
    cacheImages(imgArray);

  }, []);
  return (
    <div className="Cube">{
      isLoading ?
      loadingIndicator :
      <img
        className="cube-img"
        src={imgArray[index - 1]}
        style={{ filter: `blur(${blur}px)` }}
        loading="lazy"
      ></img>}
    </div>
  );
}
export default Cube;

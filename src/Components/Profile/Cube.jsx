import { useEffect, useState } from "react";
import imgArray from "./profile-images";

import ImageScroll from "../Scroll";
function Cube(props) {
  const [index, setIndex] = useState(props.frames);
  const [blur, setBlur] = useState(
    (props.frames - 1) / (props.frames / props.blurMultiplier)
  );
  useEffect(() => {
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
    }, props.timeout * 1000);
  }, []);
  return (
    <div className="Cube">
      <img
        className="cube-img"
        src={imgArray[index - 1]}
        style={{ filter: `blur(${blur}px)` }}
      ></img>
    </div>
  );
}
export default Cube;

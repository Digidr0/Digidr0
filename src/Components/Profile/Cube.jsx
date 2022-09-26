import { useEffect, useState } from "react";
import imgArray from "./profile-images";
import ImageScroll from "../Scroll";
import Preload from "react-preload";
function Cube(props) {
  const loadingIndicator = <div>Loading...</div>;
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
    }, props.timeout * 2000);
  }, []);
  return (
    <div className="Cube">
      <Preload
        loadingIndicator={loadingIndicator}
        images={imgArray}
        autoResolveDelay={3000}
        onError={this._handleImageLoadError}
        onSuccess={this._handleImageLoadSuccess}
        resolveOnError={true}
        mountChildren={true}
      >
        {
          <img
            className="cube-img"
            src={imgArray[index - 1]}
            style={{ filter: `blur(${blur}px)` }}
            loading="lazy"
          ></img>
        }
      </Preload>
    </div>
  );
}
export default Cube;

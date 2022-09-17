import { useEffect, useState } from "react";
import imgArray from "./profile-images";

import ImageScroll from "../Scroll";
function Cube(props) {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIndex(ImageScroll(30, ".Cube", 2.75));
    });
  }, []);
  return (
    <div className="Cube">
      <img className="cube-img" src={imgArray[index]}></img>
    </div>
  );
}
export default Cube;

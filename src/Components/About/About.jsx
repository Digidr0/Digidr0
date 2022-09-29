import "./About.css";
import { useEffect, useState } from "react";
import imgArray from "./about-images";
import ImageScroll from "../Scroll";

function About() {
  const loadingIndicator = <div>Loading...</div>;
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(1);
  function ScrollListener() {
    window.addEventListener("scroll", () => {
      setIndex(ImageScroll(30, ".About", 2));
    });
  }
  const cacheImages = async (srcArray) => {
    console.log("%c...loading \"torus\" images", "color:goldenRod");
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    console.log("%c\"torus\" images loaded", "color:MediumSeaGreen");
    setIsLoading(false);
    ScrollListener();
  };
  useEffect(() => {
    cacheImages(imgArray);
  }, []);

  return (
    <div className="About" id="about">
      <div className="about-description">
        <p className="about-description-text">
          Hello, my name is <b>Ildar Grankin.</b> <br></br>
          <br></br>I am a novice js html and css developer. I also work with
          Reaсt projects and components, on which this site is written. I am
          ambitious in my approach to the project and like to learn new things
          unknown to me before. In the future I plan to study Python and
          TypeScript development. <br></br>
          <br></br>In parallel I am fond of design, 3D modeling and music.
        </p>
      </div>
      <img className="about-bg-img" src={imgArray[index]} loading="lazy"></img>
    </div>
  );
}
export default About;

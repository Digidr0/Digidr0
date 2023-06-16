import "./Info.css";
import { useEffect, useState } from "react";
import imgArray from "./info-images";
import ImageScroll from "../Scroll";

function Info() {
  const loadingIndicator = (
    <div style={{ width: "2em", height: "2em" }}>Loading...</div>
  );
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(1);
  function ScrollListener() {
    window.addEventListener("scroll", () => {
      setIndex(ImageScroll(30, ".Info", 2, 1000));
    });
  }
  const cacheImages = async (srcArray) => {
    console.log('%cloading "info" images...', "color:goldenRod");
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    console.log('%c"info" images loaded', "color:MediumSeaGreen");
    setIsLoading(false);
    ScrollListener();
  };
  useEffect(() => {
    cacheImages(imgArray);
  }, []);

  return (
    <div className="Info" id="info">
      <ul className="info-features">
        <li>
          <b>Age:</b> 20 years, male
        </li>
        <li>
          <b>Name:</b> Grankin Ildar
        </li>
        <li>
          <b>Language:</b> Russian, English B1, och lite svenska
        </li>
        <li>
          <b>City:</b>{" "}
          <span
            className="underline"
            onClick={() =>
              window.open(`https://maps.google.com/?q=Saint-Petersburg`)
            }
          >
            Saint-Petersburg
          </span>
        </li>
        <li>
          <b>Job:</b> Front-end developer, 3D artist
        </li>
        <li>
          <b>Education: </b>Secondary special education as{" "}
          <i>Computer Networks engeneer</i>
        </li>
        <li>
          <b>Email: </b>
          <span
            className="underline"
            onClick={() =>
              window.open(
                `mailto:digidro.work@gmail.com?subject=Contact from website`
              )
            }
          >
            digidro.work@gmail.com
          </span>
        </li>
        <li>
          <b>Favorite games: </b>Atomic Heart, Overwatch, Minecraft, Cyberpunk 2077
        </li>
        <li>
          <b>Favorite musicians: </b>DVRST, Mujuice, plenka, кис-кис,
          GONE.Fludd, FEDUK, Convolk
        </li>
      </ul>
      {isLoading ? (
        loadingIndicator
      ) : (
        <img className="info-img" src={imgArray[index]} loading="lazy"></img>
      )}
    </div>
  );
}
export default Info;

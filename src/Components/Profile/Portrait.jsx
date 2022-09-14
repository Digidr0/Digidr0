import SVG from "..//..//assets/portrait.svg"
import "./Portrait.css";
function Portrait(props) {
  return (
    <div className="Portrait">
      <img className="portrait-photo grayscale" src={props.img}></img>
      <img src={SVG} className="portrait-composition"></img>
    </div>
  );
}
export default Portrait;

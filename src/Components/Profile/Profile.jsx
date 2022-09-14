import "./Profile.css";
import photo from "../../assets/portrait.png";
import Portrait from "./Portrait";
import SectionScroll from "../SectionScroll";
function Profile(props) {
  return (
    <div className="Profile">
      <div className="profile--info">
        <div className="info--description">
          <div className="description-container">
            <span className="greeteng">Hello, I am</span>
            <div className="gradient-text-container">
              <h2 className="gradient-text">@digidro</h2>
            </div>
            <span className="job-status">
              novice javascript and React programmer.
            </span>
            <button className="about-me btn">More about me</button>
          </div>
        </div>
        <div className="info-photo">
          <Portrait img={photo} />
        </div>
      </div>
        <SectionScroll section="my projects "/>
      
    </div>
  );
}
export default Profile;

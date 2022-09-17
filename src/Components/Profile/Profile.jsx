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
              <div className="nickname-container"></div>
            </div>
            <span className="job-status">
              Javascript and React programmer, 3D designer
            </span>
            <a className="about-me btn" href="#about">
              More about me
            </a>
          </div>
        </div>
        <Portrait img={photo} />
      </div>
      <SectionScroll section="my projects" href="projects" />
    </div>
  );
}
export default Profile;

import "./Profile.css";
import Cube from "./Cube";
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
        <Cube frames={30} speed={1.25} timeout={0.4} blurMultiplier={10} />
      </div>
      <div className="profile-section-scroll">
        <SectionScroll section="my projects" href="projects" />
      </div>
    </div>
  );
}
export default Profile;

import Project from "./Project";
import SectionScroll from "../SectionScroll";
import "./Projects.css";
function Projects(props) {
  const animation = true;
  return (
    <div className="Projects" id="projects">
      <div className="projects-grid">
        <Project
          link="https://github.com/Digidr0/Weather-API"
          imagePath="/res/1.gif"
          ghPages={true}
          animation={animation}
        />
        <Project
          link="https://github.com/Digidr0/Etch-A-Sketch"
          imagePath="/img/grid-2.gif"
          ghPages={true}
          animation={animation}
        />
        <Project
          link="https://github.com/Digidr0/tenzies"
          imagePath="/public/demo.gif"
          ghPages={false}
          animation={animation}
        />

        <Project
          link="https://github.com/Digidr0/Calculator"
          ghPages={true}
          imagePath="./img/demo.gif"
          animation={animation}
        />
        <Project
          link="https://github.com/Digidr0/Overwatch-api"
          ghPages={true}
          animation={animation}
        />
        <Project
          link="https://github.com/Digidr0/Library"
          imagePath="/img/Ref2.png"
          ghPages={true}
          animation={animation}

        />
      </div>
      <SectionScroll section="about me" href="about"/>
    </div>
  );
}
export default Projects;

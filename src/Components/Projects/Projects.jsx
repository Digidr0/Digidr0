import Project from "./Project";
import SectionScroll from "../SectionScroll";
import "./Projects.css";
import { useState } from "react";
function Projects(props) {
  const [animation, setAnimation] = useState(true);
  return (
    <div className="Projects" id="projects">
      <div className="projects-visibility" onClick={() => setAnimation((prev) => !prev)}>
        {animation ? (
          <span className="material-symbols-outlined">visibility</span>
        ) : (
          <span className="material-symbols-outlined">visibility_off</span>
        )}
      </div>
      <div className="projects-grid">
        <Project
          link="https://github.com/Digidr0/Weather-API"
          imagePath="/res/1.gif"
          ghPages={true}
          animation={animation}
          description="This application allows the user to see the current weather anywhere in the world,
          as well as the weather forecast for the coming days."
        />
        <Project
          link="https://github.com/Digidr0/Etch-A-Sketch"
          imagePath="/img/grid-2.gif"
          ghPages={true}
          animation={animation}
          description="Browser version of something between a sketchpad and an Etch-A-Sketch."
        />
        <Project
          link="https://github.com/Digidr0/Tenzies"
          imagePath="/public/demo.gif"
          ghPages={true}
          animation={animation}
          description="Roll until all dice are the same.Click each die to freeze it at its current value between rolls."
        />

        <Project
          link="https://github.com/Digidr0/Calculator"
          ghPages={true}
          imagePath="./img/demo.gif"
          animation={animation}
          description="Simple calculator on js. You can add, subtract, multiply, divide numbers, and get a result."
        />
        <Project
          link="https://github.com/Digidr0/Cursors"
          imagePath="/cursors-grid.png"
          ghPages={true}
          animation={animation}
          description="On the pages of this project you can test ALL available types of cursors."
        />
        <Project
          link="https://github.com/Digidr0/Library"
          imagePath="/img/Ref2.png"
          ghPages={true}
          animation={animation}
          description="Library, where you can add boooks, and delete them."
        />
      </div>
      <div className="project-section-scroll">
        <SectionScroll section="about me" href="about" />
      </div>
    </div>
  );
}
export default Projects;

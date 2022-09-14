import Project from "./Project";
import "./Projects.css"
function Projects(props) {
  return (
    <div className="Projects">
     <Project link="https://github.com/Digidr0/Weather-API" imagePath="/res/1.gif" ghPages={true}/>
     <Project link="https://github.com/Digidr0/Etch-A-Sketch" imagePath="/img/grid-2.gif" ghPages={true}/>
     <Project link="https://github.com/Digidr0/tenzies" imagePath="/public/demo.gif"/>
     <Project link="https://github.com/Digidr0/Calculator" ghPages={true}/>
     <Project link="https://github.com/Digidr0/Overwatch-api" ghPages={true}/>
     <Project link="https://github.com/Digidr0/Library" imagePath="/img/Ref2.png" ghPages={true}/>
    </div>
  );
}
export default Projects;
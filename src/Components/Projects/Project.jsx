import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import GetContent from "./octokit";
import MarkdownIt from "markdown-it";
import StR from "string-to-react";
function Project(props) {
  let md = new MarkdownIt();
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState(
    `${props.link}/blob/main/${props.imagePath}?raw=true`
  );

  useEffect(() => {
    Promise.resolve(GetContent(getName()[3], getName()[4], "README.md")).then(
      (res) => {
        setDescription(res.split("\n")[1]);
      }
    );
  }, []);
  const randomHue = Math.floor(Math.random() * 255);
  const color1 = `hsl(${randomHue}, 60%, 45%)`;
  const color2 = `hsl(${randomHue}, 60%, 35%)`;
  const color3 = `hsl(${randomHue}, 60%, 25%)`;
  const coverStyle = {
    backgroundImage: `linear-gradient(30deg, ${color1} 12%, transparent 12.5%, transparent 87%, ${color1} 87.5%, ${color1}), linear-gradient(150deg, ${color1} 12%, transparent 12.5%, transparent 87%, ${color1} 87.5%, ${color1}), linear-gradient(30deg, ${color1} 12%, transparent 12.5%, transparent 87%, ${color1} 87.5%, ${color1}), linear-gradient(150deg, ${color1} 12%, transparent 12.5%, transparent 87%, ${color1} 87.5%, ${color1}), linear-gradient(60deg, ${color2} 25%, transparent 25.5%, transparent 75%, ${color2} 75%, ${color2}), linear-gradient(60deg, ${color2} 25%, transparent 25.5%, transparent 75%, ${color2} 75%, ${color2})`,
    backgroundColor: color3,
  };

  function getName() {
    return props.link.split("/");
  }
  // const element = md.render(description)
  let element = `<div>${md.render(description)}</div>`;
  // console.log(md.render(description).toString())
  element = StR(element);
  return (
    <div className="Project">
      {props.imagePath ? (
        <img className="project-cover" src={imageLink}></img>
      ) : (
        <div className="project-cover empty" style={coverStyle}></div>
      )}
      <div className="project-info">
        <h3 className="project-title">{getName()[4]}</h3>
        <div className="project-description">{element}</div>
        <div className="project-links">
          <div className="project-link-container">
            <span className="material-symbols-outlined">folder_copy</span>
            <a className="project-link" href={props.link}>
              Repository
            </a>
          </div>
          {props.ghPages && (
            <div className="project-link-container">
              <span className="material-symbols-outlined">podcasts</span>
              <a
                className="project-link"
                href={`https://${getName()[3]}.github.io/${getName()[4]}/`}
              >
                Live preview
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;

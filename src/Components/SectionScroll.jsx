import "./SectionScroll.css";
function SectionScroll(props) {
  return (
    <a className="SectionScroll" href={`#${props.href}`}>
      <div className="sectionScroll-inline">
        <div className="hr"></div>
        <div className="sectionScroll-text">{props.section}</div>
        <div className="hr"></div>
      </div>
      <span className="material-symbols-outlined expand_more">expand_more</span>
    </a>
  );
}
export default SectionScroll;

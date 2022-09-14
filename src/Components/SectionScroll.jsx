import "./SectionScroll.css";
function SectionScroll(props) {
  return (
    <div className="SectionScroll">
      <div className="sectionScroll-inline">
        <div className="hr"></div>
        <div className="sectionScroll-text">{props.section}</div>
        <div className="hr"></div>
      </div>
      <span className="material-symbols-outlined expand_more">expand_more</span>
    </div>
  );
}
export default SectionScroll;

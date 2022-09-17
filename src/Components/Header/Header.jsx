import "./Header.css";
function Header(props) {
  return (
    <div className="Header">
      <div className="header--nickname-container"></div>
      <div className="header--links">
        <a className="header--link" href="#about">
          About
        </a>
        <a className="header--link" href="#links">
          Links
        </a>
        <a
          className="header--link"
          onClick={()=>window.open(`mailto:ildar.grankin@gmail.com`)}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
export default Header;

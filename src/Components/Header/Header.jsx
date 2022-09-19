import "./Header.css";
function Header(props) {
  return (
    <div className="Header">
      <div className="header--nickname-container"></div>
      <div className="header--links">
        <a className="header--link about" href="#about">
          About
        </a>
        <a className="header--link links" href="#links">
          Links
        </a>
        <a
          className="header--link mail"
          onClick={()=>window.open(`mailto:digidro.work@gmail.com?subject=Contact from website`)}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
export default Header;

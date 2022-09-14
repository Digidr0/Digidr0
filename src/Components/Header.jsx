import "./Header.css";
function Header(props) {
  return (
    <div className="Header">
      <div className="header--name">
      </div>
      <div className="header--links">
        <a className="header--link">About</a>
        <a className="header--link">work</a>
        <a className="header--link">Contact</a>
      </div>
    </div>
  );
}
export default Header;

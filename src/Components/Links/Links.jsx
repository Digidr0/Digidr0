import "./Links.css";
import Link from "./Link.jsx";
function Links(props) {
  return (
    <div className="Links" id="links">
    <hr style={{width: "100%"}} className="links-hr"></hr>
      <div className="links-container">
        <Link url="https://github.com/Digidr0" text="Github" />
        <Link url="https://steamcommunity.com/id/Digidro/" text="Steam" />
        <Link url="https://vk.com/digidro" text="VKontakte" />
        <Link url="https://deviantart.com/Digidro" text="Devainart" />
        <Link url="https://discordapp.com/users/330829326297726977" text="Discord" />
        <Link url="https://t.me/Digidro" text="Telegram" />
      </div>
    </div>
  );
}
export default Links;
